/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3sjBEeidCWdYKGsv9pvy2x7kPJEHNjhtZTFmPNQDpZnW8VBLyEiXfwdAe9JeQ9MhFe48htfMVwnMpi4YVFDgNsfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Wa82jPD1fpdt6oJFRSDNRBnSyUKp8v12NDdBefmEBLZH54vFTCSCU9axdULxx3vaBEkZhLvtZo6ax7WJm2JWGR",
  "key1": "3ZEEYdSVBERBE3VpLP8V67zEqKRbRVNrmADT6swgrX8UVougtKCMpw3kQchioGen4wcZzDEAQoLAc6DDqHGa3jdJ",
  "key2": "4L6M5UowbbCbQoDNzvtV2LP8hYKPqNXuSG3msKwXbUq7pWtCpP5FGDhgzGAedga4kUVQPeSCT3YypWFm5JRyoiBU",
  "key3": "y2vYvZYgyuQWMr6ct5R1PMDBQCSiMHMoWTykSN65XXVNqPEyXLsfcRv5QGPavWHEXh3BQggAhDYya6BseXs9Sge",
  "key4": "5awAza5hjXjs66HDw15R1ssbbYY6vwS5oa1u8h5z8MD4kJkviZdzbYAxb73fSTiLxLdbRKSzowWFsRTpQHp1Lxo1",
  "key5": "4pFPKPDJ8yF3d27txnqRids2wtvjwX164HooKWe6yKRTnx7kp5UdQ1c3rK1WfnvmKRCcfmVAL9Nb5TpM241BEZer",
  "key6": "4kvvL8gvCpEk4BQoC2uF9sqbBPoD76szXCFtKWXuG1TLGrjQ8qVr2opo1aSfHN1uoxoeyBFf46vpMn1bwo44ENEk",
  "key7": "55MgsanVsqCfRL2EWEYnLKRz5kjy3gHUakfDg5wGw496njVZ3svZiZ3XYtrhPitdFYnfQbTXLonhzhz2KvHTUoE1",
  "key8": "t2P8Pwp9i1vgdRymfmtNFXNazVTscK1P4HRsSw6z3nUYncJzj9TDr1QxYyL17R3vbToCyKtPpMAyYQZDbmTAgLs",
  "key9": "DNhnPJnScV6at9UFadYbkr1LEpJY45mpWzZttopFszZKEGfG1SMBY1p6saV8oUoNpbaNjETfSZACy7wLrk2wFQP",
  "key10": "2gGb25G9yXSrd6m5n5YpZ288NCkVJzrLWXmuxg92ByZum31LgefNvPSek2gZoLPUYRcKxAc6N4wcRw4Xc5ntVPZ3",
  "key11": "1887K9bofEG8B5xmwvrygLLWMKQ4HMFgqsVjzBLxrFhvjWG7VhxsGn2wr3Y9pt4FuudhHEYfSvKEmdDGCbvpLKD",
  "key12": "67DfU8V79NjNR2McqgrtHaRzbXvety7qAiDvdDWg85snAbFSY6v9g4rb6GyY45tAGpGrK9QFvrs32ybdGWgxBfg",
  "key13": "2Ag3mQDs2ehzTeakK6ui2XWdSG4Tvo67DVD4FtPW44p6bt48cQc1xKGv4eU5oadAL6s3uiQV5zu81yKp5ZMLaAcN",
  "key14": "7x3H2dsdQ8cG58Rwu6nHdNYWFRNiFrDAYNs9AFiwx98JQi331wFU9haEnsSPoRhBUy9i7zvZeaCzUXtPq3qXmWp",
  "key15": "77AqWcvRbW2gjAJ83whXznPG516WhLXmzepfPnkp6PAZZBqdJBufPoGjhk2TPfowt8cJnP9B7E3jrnQdUjwLSKk",
  "key16": "XitSqWL3thN2ZbCJgoWjNPNThJVSqSQbgMrBtJ4z1fE8QT8SeqB69iGvGXHxYosuDPKDaws7rHLtz2jmSCqrBnA",
  "key17": "3XsR3MmoYwDspaParAXzKRLuMby38rbfRMQAKpRxTo8cDfqS9MSxFDfZJd4mi3PSFJ7jg3nH4yrhozkCL48w8orc",
  "key18": "479QUvPaeE9m78KCE1dRMVYC5C17e6DY4JQiFePAyocesRdNc2VEsyNyRe3w891oK5iW7LkMiV3FSSFucmYEAtBT",
  "key19": "4Dzq2QCeiDYkfhT7TN39dyHMb36eJRh1yHHUymNUgbk1WEaAhcL9ti6zSkHqXeLy8M4vVGmkRHRGbvboPaPuvHVm",
  "key20": "3iTdE71UdL3t4aBUCNioKkvWPoUpCxhEaUedusuFWX3NJodUxGmYea2Y4zYXRD126EAGVjSPnxJFWzSKgvJyMeif",
  "key21": "3sTL5KDSfPoSgoSFkfsq77GJkY5n2DaTYL8QXXXPiBZpsb37frhKVvY5sJu6rLkYsQYarnisyd4CdJ9zhEusaBSn",
  "key22": "3H8BVTN4WocB8aV9YSNB8yWuVv1vJrGpynWyumKSCFznGt1wdz8uFQHmpmeBejKWxsTvZpAznthVQiUAzeV7PbfZ",
  "key23": "53nRiPQyyR5wJcEr4BKNhxKhex2A1bBG9VBgvnDLK9WpQVheDfHfUjwAGJxVUFCpnwaGZShHiUZQAeE9bxzRpGcG",
  "key24": "3RhBYt36CEWiG5cLMvgWM7yP4tq4UKqWKPEHAUZpdBWg4eJrU7o6Aq9gnk8s266kxFj4MdUKtGdwAvgH1C9eKHi3",
  "key25": "5MEPCpmsDuXsMH9oWPnAGqfz4t6Q1fYv99uAWW1aoGhgWcaTDJrhHfkV59CPU2yciYvePbEWn6tB2awSq7aCJpax",
  "key26": "2QRXMsof5aXqxoEb7ZQrAF9bJ4TASFkWCEPp67Z3YAveFLpPGjiS2RSYpgQbpv6Sbchw3PkorMpgTjTvBoVbghhq",
  "key27": "2nz8bATmepbfzjP18d5BnXiwmww8mh64vytaWNaSWjfN6CLpNyhWSEdoSDYCpaYSijMqYosoR2t6JC4dbezzSJAg",
  "key28": "67aXJNeaHENwkGQZ6ZmXaCG7PexLQWvYy29LzdVJ7HeHdpYrbfwzeb2VPN8u6eceyUkkHs79Jq1uXeMtkqGXyNju",
  "key29": "3potJ3Bc4gyAr7Q5jSv6koi5K4BBmBJcD2oWeBz1SkTir8B8XTuZUmw8TR2rL62V4Y4kpy53vo6DueyzjcdTtcjo",
  "key30": "4Y6E7WgxWQEGeLjw6UYrKPLTCGeNYroPd4GSiRpGMFfg7yakkBWY9i2rn9U5TAwW7ZaA96afpmVMi9HA1wzeKhD6",
  "key31": "2MRu3waXku73GQt6iGjaRRt8CSDkqw4JPdkkq7fnbBY3BLpKLFEi4aGUwM6HcW8nVaCY3tNZDSQXtYxnteUE9jFJ",
  "key32": "25oJg283rwkVQEXjMcYkpTEaMZfSwjPnLPeMJbEz86iYhEh37ghMk24VJC5Ni7sPPdFNzJdS7KiCf34obQYs6cZp",
  "key33": "2xD7dPkS3TNMuf7gwyqDxjAdxwn5A8ttSTUMGmYQdVWWBeCWfkpewvNC6Hb4Bi8xo4nudaYXuEY3EUEcvGHGaagH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

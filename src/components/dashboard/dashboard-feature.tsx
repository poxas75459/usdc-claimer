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
    "4XG7fwtgUq33L8HbJebaJEeE2LxJp369TYAqwbqPx5zQnpRuDX4S523cawEbUAzgZhEYgBMSs6DPwZgxJi4eb5f6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYgGPc2N19S7MM3Y9W7tUdmFJDe61NqGY9Zvh2M5FTwGEc4TmFvpDpnPWahXHMcyRoyFqYDVjcm9Zr8GpJBEens",
  "key1": "TwAeGU55DTNDGwZfXKmxYjU5mjqarMCfYeGz2axLsxjiJK4oXJxCW6im6M5FWoByytCh7pPi3X1BGhgANpNbVuX",
  "key2": "sst9CwLV9N8WcEFcfug5gN8Aa132P5MSf2sCiA4pv4NR8fiidR3B6uC9CwrztfiAmwWEwJGwu2gwwgdN64ESjxh",
  "key3": "43kugbHYb1ojGFFkenAGLezy5YGyTFKbqQKPACVKzQDJwGftu9RiCGDsovvtbLDz4H9CxZJoXdUoyRhtbpEjchbX",
  "key4": "3TsQQUgxCeuUn3qFExrziC71BasTfB4pni4917RN55WrogJ3fqzrUq2Jv64vRiqL2p9KSUpc82kw2KT9wrDs12Ar",
  "key5": "thodCkT5oiY2eKTvzu9UUP5WqMGkqQsghY7CrmzrGbSDiVQ6ikP5wHUW2ubdEPnzFsyRpPg2A2DFcCWhLWaaaBD",
  "key6": "3oh2g99GA5E28XzNC13jiBMhUdZXpzyJ59eSJGs3jVGK6XJVcuZSyQJyemEsjZ4LNrG4ShFypiHR8EYsjBLRuGeA",
  "key7": "3xaGdy86D66fVCrejpcoNJdz7mk9oR4Qn3ckQAqNCaVgAdrgy42bwCDa63wAqv4dddtt5cc73TTkhFnvkZywyYAg",
  "key8": "2qym7n2z9CSVSeDVj5VimhpsUzAV22xztbF833GPLDVwvESnQU6ay2GVisdE3YZWyy1CbCCznMLH8cQcrpUNMkHZ",
  "key9": "22qTrixt2HSYvZzU2a7E68SXoVMXV15jTVef1qEYVXWAnxTQksSDLBTZj73pY11yxiV8TSNRwuPFzE51mLbEQeBn",
  "key10": "5YS1CabYDJZmYZLYoDT9zDLGvnc2YqrrACyRdsSogrJuTt1q3gt5UW7RtuB68r7FE34CHABsyFWpsJquFHx2Cxyu",
  "key11": "3Hykv5LgjnR2C9cb7KEusV7hfnMKXajk5DsRn5rR7kJzLLnqWtuncF4Rds7XJCuNy5ZtJefX5hquwnuHDjHDXYG5",
  "key12": "2ErcwbATtifh2aiH7iomr1S8BU4enEoas5YP7GKbBymDX745A2RLWATpgDPZLRtjFTQjKRNkP9rQPZbP6d9ZfmrG",
  "key13": "5FwKuPKpBS3cZoeXhu9u8ekt9TyW7unvC42EHZ9BttMRDS6XwGnrDPnZBqkC4VUb1myM2MsQdj6re8872g6QuJor",
  "key14": "2FoVYjRDBSG2X3Qq6ydzFVL8m8MMnHs6ybHSR4JbgSQnLNxTUQqgeTsb6BHzYb3cdY5UqJfmkU9x9C52SFWJHXRH",
  "key15": "3Dgw99iXHQWxaFc5JAcm8H8Wd9Uz8txMB14UZ3n4KpdhUnrY6taicZYu63Esy2B22HYk6d3p6HkiLJ9F7kNqRcxn",
  "key16": "6XxMjAhFCzNXqT3PyDkgAvWE3Rz62SCDAs4XebhAw9suwUGaWbPPAVvk1a171EKtBgYvAvVLu4XutLPc5Nqzz8t",
  "key17": "61gnQAYBVj1BETbrAhtPtPUD5k7LWnSqfKjaNkB9EnrYPBZYbPehJzGUWW2E5LuMerfnyup5NyRpYLTHG9yoNufS",
  "key18": "2U47gqRcyvnSQwnCt8oqT9LbZPhE2inRiJXffhh945egQX2jQAxmihftEczeAAmNRGw32BRe2V2XXXJdthJf5vnD",
  "key19": "2QEFHGjw3A3CP4Hw1ytX5wpwPykvkLPAS4HHEeQVh5Y6nXZDY1Xob2cytxFFFfmaXdqiCGS5NJfd7vxr4emLbewi",
  "key20": "2RzXuVjJCooctagxgGYtGJMB9RuRvie91nz4pvriiTsQCXjuMkPAN1jeXDov5BCnnnbQQUVFmGiv68MZ2EfhnBvE",
  "key21": "3ndeHrt4aU2vafWCY92kncw88uGnGzoM964vpH7KCim9Zg5jCQqFFQjgURLTuo2iAquV6G7Nh22PnczTyiKvbwPg",
  "key22": "4S4t3j5EFdJpAwcPv5oju2Vkh7WGiRN1vuQLqnVbtQFs4LUqsPoDt82ESEmgw1Y3bFiXKK3ui4g3tbGCVjCH14Qw",
  "key23": "2A3BshfpH5yC2tHn56zJ75Uf5uZSQvFQNrYuELJjHVoweSQYbPRHLjxWweAizvMVifv4TAN8ay6HV3muwFK1y2bh",
  "key24": "2Dh7x9V3gi1VVk5oJBaUJhZZ6AdV84NSQZF1VwifirquZxHfrD8Eb2RoXQspVkzpsRbSD1u1qTALYG1fchMCNDHc",
  "key25": "67Y9dFzVUfFFb6FSgGMmC3UCmtUvbGoFXVEEFmhPqNh563nXzGMCCGb8zWiGq15ZGmNXNBH9FU7wnjxeAd8mG1AJ",
  "key26": "29tbTnG8o3UGdtshH51Kcp9B2T8JKKGkN2STN3sUEs456cpGfmsQpbKYmCCCHFQW32yZR4iAwmagSAgpnyfrmuMF",
  "key27": "4mk95vUMWtM2pYMVSvwtk8mobb1KZ3TBCpof8cRqjDq2i1k3avnb2sV9RmfWQ9q4PrQp6BU4ho1ufqQHvJWdytQJ",
  "key28": "3GJDLtgWZzoVo4EJfG52kXZbs5c5CotcZ2518K7fEWEDjKG2qkkv7q8GwxrJSaYyopiKXRfxpGXXTDNBKAhsdcPU",
  "key29": "5V9SirCKvyVwfrN8h7b6StbVkErQwzhRECsB2hGu7esfYujL4NtTpTufD2xG4cgHAjKqYoLgYqhAxFkMiwG43TGB",
  "key30": "CNbPdgUGMZMaTbCcHinCxhqKGg3RVNwt3siw7GX7mVbzEqsfje8uQrL7GTX2Ldzjp975EAbKMKT8drEXdiRwVuE",
  "key31": "2m7r1wnfyAMv5rNdhNduRxyk5753QLHHwBPWP5yiSq59pspRsUXNmjQmG5Qtt9yrmwi2o4pYJXFtzmkQzWvo8o1",
  "key32": "2CGdoChfc2GiLiewdCGmVqCtaLagARRxUeBzeNt8Xvrzsdu8Q5n9GMTPJxCgdwWMruQoMNDD5x3g8WniR3fijQFj",
  "key33": "2WNvHav2LaXos58hks9X5pYaXPqaoDYRFvCjtYti7fhSggdYyQ8ANi6CkFq24QBdLq8oEb3JQFE7B1K8LjoQuPyV",
  "key34": "4st1ZnSDE2KbndT6pQg3AwtJHy49wW41hh8oKNFk7gma4mqDXDiexShdnDZCXeV8dKdVNJf4aBxpJaZ4hwQqy6JQ",
  "key35": "5dvQT8ZbcTH3uPc65bYvdL3mHEFPw9UkdDRMDQAA5bPWv88SJ21EcJouewVgWGpSBykDSdW4BK72aVrx9avNigK3",
  "key36": "4vcPrigTXQPQvi6swbZnhW4MfbebdJPXbWERaQohtc5E2Ra3PMitgVsW5WtSo3S7YSERftp7t49vFX6E1YLNZkG5",
  "key37": "3W36qkKsjpFSMQAnedqb6RLRevd5zebmeWNEKnSoSYmf24SjBVQwmDf2iUskVMT9QJfxoMquUBZgNqJ793YNcSXN",
  "key38": "4HfNS2KkFbe2fAL75abtSdhKYEXUVHAL2Z2Z1mRdt89sQqXYidykeqbXX2Q3GwpWgqk8z6eiN9qwvBGtzQotSaSN",
  "key39": "38hGU841AUy4Dig7HNgZTdmj7mFEJa1oajCKt7iLN7jVHBeP9rqx4UHb4412bbuKqSKkLhxGbDnTJU7KwnRoeNtS"
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

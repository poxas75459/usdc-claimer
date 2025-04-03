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
    "57chVn6Q9LXqyLaUymxGoHq8dvJc82eLBf9yRuypW8SMakiEBPPRbi1TK3WZPopcsEdvpNx4PVMHyKnv4S5xhDtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZBmY9b2HcB1YdT1814KJ8EaLqYSdTBkz7pkPFYerb2sWgZ1ahgJCSf4yLX78uhevz2ZB5K2Xk1o2MWgEP787mhA",
  "key1": "2pCQYbgGi1k7XCXZYNLXoLwicBG9cGSevWLnV51WPvk9jYkzM3PeeAV2ydAzxY1dezgPT3JUMG4hbA5gde1JpGcd",
  "key2": "5yChTpL9J36U5UtZYuPb27WjTdD5g4ciKERYq3iJs7NRVDfCUsZS7uPN61Xk7gpQ5st1hQBR2dVHVgtfBG5k1dPA",
  "key3": "2deLpMQ5HWNqNzJ9TLikQPvhcCKwjoXv8PwFrWJ2Yev3B6KLSMonR987pZ9kzPnhYHaryRuQRYTZapHn2Hi1S6qc",
  "key4": "Vnede58eo89qEoJS74ZEZ5iGDuP8fiafo9LFy1kqybaTYTST31ud2b3364zR2UZVFCeZXqk9EjNcMtZHjd31BGF",
  "key5": "38NL7pp7HzGdbcNBkrtPYPUhTf7rzbjCb3zYErySfvcmfvJSMrzcuJkeTh3bAcsHF4fDwabZN5gBgSucEURoT6BX",
  "key6": "3oxEuNknD5iAqDNQdXYjcciQ3XUhTe3baKiwJbMhJmLxKyvvT8eqpA124xSHsGyaDTzarrTGGPAzkTJDFUwsotZa",
  "key7": "5kfVWK5edTo1xkW4e9bHxNiFuvYmEuoscEQfQQBSerJw94ZibL8WvsoTjZM4R7GUsEZFNgxLH6ZqqYrTwMRjPqqM",
  "key8": "2jZWNrBpXxYq9U6fVKLimpByc3VTvynvTdedhJUGqgvRP8JATpdiSkLHwVJ7xh8QWgumnPUuseAvBRdBKnBuCcH1",
  "key9": "28GyWwJj9PJ9c2tdkCU4vFpTAhtSoyKKUYY4C64i6P8ksMhKfzwSrFGCKTfUw6VyhG7j4SSDQ5aFfEUo33RNLmB3",
  "key10": "5P7jRE1LD3F7YZCcbZyL2As5naqnP3QYMdz2JUPkpEsfu3MxjMScBXJwbJaMieFRMQ8gcMdL419wsthG5kQ1DuHW",
  "key11": "4TbJBhTVLUPcxLevrYpHe6LaGsDfWXghxp1kymwaMo8A7suovvErCa5vkWfr2b4zoEMhxc2NZrFqURR5oDVb4meo",
  "key12": "c7DWceCNJgV1ZfH4evTyFRpK9TrHCm9sY4G12Uq9snmqasD8eAJKoKKh881CKz7iY2CP1Fn5R5pLAP9WnTwqXb4",
  "key13": "4kMyQM9mvavr9dzUM1Z3d315u6kBgzGZB4u1GSodYTmqyer2pT49pnpNmwVX29h1giWcWRtRMFL7dyaFExrVtaiG",
  "key14": "2rGmUCL389PoNbNxYmWzvMbSnWjDq31DJ9TFeATCN8o6j4pLTXqvwQ7EimPDjfEEWjfNT4mC4f8VYyQwPNtWVmkQ",
  "key15": "24Nfcsfrx7oCqGs7TuoF4NEHUU2XPj26FjMnfqWPZry63YETTK4MBdnjBJBm92G81EEewCGCK7ht52D1W8qymuSk",
  "key16": "NWaTWi1SCMCmsSxyczWgS4PTebHTJSkoQd6eX1Ko9WGoG2NmHHfR85TsNk388mHJvdMkn4Yb5br6zE2SHLu8Bmw",
  "key17": "4J6AoKw8LJkVyg1xqUvkYN9Q8hagYpU5kFwNhwNStGmJ5TGTW9o2Bo3GVH5dkagPDLaJcM8E1kpsN1AfxGpCf7sa",
  "key18": "4vUv6ELq8x5cSHB1C2Lsv9ftBL2yhYZ5TMUsfb4ChGKM5MHygnijM4G5Ls2jUNoyahkLKMEwXUbncb2EM7qDmWNg",
  "key19": "pLxhzkErKKRbKmTc3AEZroWuVVq1SBFmMfFGU9qFJshw9XVdsH37tTdNCwupgeEKtq2DicJWmagKFQQ2V1xiFC3",
  "key20": "2pTTVgd7mknJMzcT5T6N73U71mRnpDx9oUjD8iEPFJT4tQkATkiNbpCFW93K27YRqUPVDcuqZMaQiJkJkTAxbBLc",
  "key21": "QuNTLwZMLLvmSQPbQdoa5bk2xu5EbZCDvdnEPFA2ve1smvqvf1bMML4MidfaSaYnH6HPuCc5DHx9BLDrLQ95u2N",
  "key22": "44VvZcx1n1qcnWcSHSETJcb4wcpERm2PKUktWaxRwuDJHXavM4QxAkdQwbVchhdWispNNHQc9wTjnRXpuDM3bGNQ",
  "key23": "4w9huA9yTh94iURXBnuWCY38WoT5rQaZ2XTjYsZfQ8rTpcEkXt9uwg9oEdfdti4Ffr3SbnevVmTemKjGCeyykqsY",
  "key24": "2ASUTfseh13fnc9mXsXZEVcc5zyLFgwfVVPzEX193WkWyrrma2qUwMnhhayqddbreUV7uxHwTg4oLaZWucrxL67i",
  "key25": "21WLgSgzvUJpZxZKsdo4Ue1HKFnpgDqH3Boc7KpNz49gUZiLyLMTFTKmdCkKVbosdRaidGowsCAixxxqhndV4Xvq",
  "key26": "2wT2rAvkEBxDcYgc4RYZbec1HbY7j4DXdmLwzXkgps4doQHq19D61tGsug8fSejLRL2udTw24awGmnXNwBBhWRG3",
  "key27": "2JHexPRsfUJ6pDcUeTReSVbr11qq9ifcTwGjuMiaqD9KrPVq1pFRTtRN6pd6Vj6VxdrnKy3Sy8BXq8PyEUHh4ogo",
  "key28": "47SZm4AFKH8KERvAFqCa6L8QobHWTYfqDKe8tWcKx51VdxHX4sHqahUzE42WTsTxNhSsmEydozP2DCbJxfEPYf1L",
  "key29": "27jKy8ARwX3CvWodJ6d6YmuuzNJnAVaUmvPNRThnXNCvBNJFXBtvZtHM2rTd72bDqrAfGqxSffZ3oJ97RgUZF8Sc",
  "key30": "2TRa2kqxsFKvumDzkUaGULwva4fzmL76mYeULYqYsqenZrjUNYu9JvGogFoUdcDrRKzShK8JRLiCH8EHPVJD6F6G",
  "key31": "RFaqCikfGo3po6Cb7UjLsoQiW61RS5ik1E331J2KXFrEW3a2tUNZKfUaLhovgzjuLRxpYEjPCiphBbmskGG39Sc",
  "key32": "b5DQ1FGpTdDpazue4mwWLhQjvs4bMg1DqwAbsrqnhN2w7bXWQFjtVVzF6dM68xM8JKkQGCMhHu6tFWvD3cEhirC"
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

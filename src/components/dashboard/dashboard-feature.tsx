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
    "5qRnKrmmEaYoB3CdyNas1K2UyvdDcEHbr6fkjwbnZdVPKkGVTHXbCqbtsRK8UvB5qAjg6Hqohi8vnSRoBRCF3Hfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kmnU2PBgT3FJ2TkfgXd7npJcUve2GX2tYDiHLsGR53hK9Nvv2gbTXuBwwNxV4HAKmqpWz7MnuSFf9f2rerzgQyn",
  "key1": "3MEXWcf5piXMTNCc3TUEm8P59wC8jPBkm9RvkJNCni7UbEpAs9Z3RjVqbLf4H8asKxNZifnvY5tiWsQ5uRwD9eC8",
  "key2": "2QBcrD23RWTRsBZs9VsDtCyt1LbCAyNqHw6PjvUwAYnA5PZTNT6ZNf7S6vkPFoBWiVxNgLTaufQjVTxsPiYhYsLj",
  "key3": "4X9YkgUuRx4VGsuGzac7sTsr8698TpvLNYUrpapNv3MrW5JqapegA5EX6khqPV1oiFXdnMy9NW1EFq5fdfUurJte",
  "key4": "4zQG1q13tRwBaeZsTAP4uRipK1pT725oqSrpRnQTJfX9jgoWdeK3jxLaVvyqCQzoVvne4E1WbM1gbXHwAcnWknry",
  "key5": "3dAGzNBuchcAaPkMkjqxVC61wcQqwy1RpRc4m62uqRt8V916TBHyrmb11iXbPJ222fA9eVkvvygUMx9iB8yEPMNd",
  "key6": "4eE4a4bLx1e6bhonwedCQn3dpS7PofFVLVMEzFeVdtvJ5tDbZosrAtEZNfQf8RjgtmcCZjZfzbxpoaxd17bVQfxG",
  "key7": "2MnD4bBsohjfnWiZoKahviDSMn1rzjVDfLb7bM5EVdNEUaPn7XByx7MKaricga8eb4gcgx6QgtUR34tx2EeQZFNM",
  "key8": "4WrVE6kbD8BASCoSLSyJsxi4HNAJ8LL9VCK4ApK8fthjWbD7LCva5By8syKcJQtGdsFy4zUQ1GtCQiD1qfM75GPu",
  "key9": "5JgaJPkVYSSeGY2yXc6sirMiWZcmvD4oymHmXTgD48qJEi5oWQrQd7SiPaqEuZt9Lqd4jTM7NLUmz3heXFGr2hpQ",
  "key10": "2ya2w18gMPZGUzY38vonEo5fp3iB4We3RCGrGtyDBhLHAEBsCwCvoy7E59UWR8aCa4EHBjmdQZPzUw5koLDjjG6y",
  "key11": "427D5ysouhgmiyzBLjvCLM9oLayxL86RHEANX2x69aAn8Gh9CTbBR2z1fNQxZMgAQrVurUw37114tAdCqfXavTRS",
  "key12": "qwkU1Ky7tKgjoRxDR7p3WV1oAkmtifQQA3M8BiqdJdP2XbHbVXLwVoVRcEmoJsU81pGHFFzSgrreB5puWhbVnuP",
  "key13": "hMRTDXUC5b3wBAREECmMgXd9ufgVQ3mbTJX6x3p4Ko9PT93NtKi7EsbxABDtSy62oPtQRxXZqSGm95SsSiMjGbN",
  "key14": "4mhYrUKo26HcAMP4dURJvBSvYJMZ4XXpbnR92XYsGknoB5jozeLuN7Wusyi3o7A9U85zmE465EQydWxeFTvjC6VE",
  "key15": "4PE6jrxb65NZWfw7zdE3tCN25prkNLFkVS2LxBjpH2zZ7hCVqm5qPgvENS65wz9euubZ6yKKwLY66N5BaX4kRX4k",
  "key16": "5gAY4s7QS67Y4X5kyagqzNd27NgLBFyzt9FZ7Fpq68FnLuCVj41fbMT1byu6hGcLyi1iQkZhW91H4TG9svN2ouzr",
  "key17": "3uEUuVmd7EC1p1ZprygG1ykCXcienH8sjfpuhJBBQpx3BvRYCUqyZ4XAsYr8TahyCyhjmAPyjKf7xwzz1UiV19Ur",
  "key18": "52JuetRP6vC6ARKj3H5TcaNaDvQLP8ScJm8rB4cpoP6u8yYBaeCcHtzBRCSR4eBjGG4oJ9JvjDKmEQK4E2jTpc6T",
  "key19": "2u1iRoWh77z4W2d9ssFuYbmM14J2PK9r5A7x2UGHJmFb6KBcPnvRgiGbu6f3rD532EvA6s3rDg1ZRayCRshzhp5A",
  "key20": "r74ApbF2jNawNRLTGLzdJZaPt4ctJFk18NAXFQJ8KXRnJmanevHBm5cdW7AvCvgMMC6knfzAE6v6jNzewwrwQKk",
  "key21": "HeEhSsEXqWkzSySr7227WZsoBNnuH8F1Vz1JC7RA5W4M4cqKpYH5kzLdkKPUzjJzCuLXHPs7zLDfoxEUCieYsbs",
  "key22": "54W2zKptaLVmWmvescC8g3XpLGJKf7DJq1yBnyZPouhaKrDxXoLGrfQdGKMRJoeTtiGW1VR7tQuUrv4D3ePKHEDg",
  "key23": "c99Z2AHybSkVFDvwzBN2ztDyW4LCMUrfztUHbTChSJTnBY3dhZn6KVpByfuHzYTFj2SHotnu5UQnPGHECiUPwsu",
  "key24": "4rYda5X6PSMsGYVKBqPThQW2juBtRdk3oEFqW2MwHp8VfXnftXYHNeua6gqrQadBkqooHejcU47dy6K5bGojX4ik",
  "key25": "5JDvNtaHQDeMwijiqu4n6fh4a9dDYE2Ar7oX98A9z9fpAfqQ3NkbgZ8yPsyuSDm5RnHx8ktJy1X94HBTYrcfaPe3",
  "key26": "36iZNJ1BGSFh6Y91TGV5eV6skFcqZLxj12AweKQpfmciXpB3WQTzQUNjQPtNXTrb6UAHFnMKJN8wSWFozCSoSg9G",
  "key27": "5SRbcndLN4pFNoHUuDJ1AErJUHJfDe5hhv2vohzUUye1KYNcUKGFwf2z1cqJVprcQzfSc2ALiyHGvWf6oA6c48J"
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

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
    "2uoTY7i1ucgg8FxXbUPT74N4LiWMnokcG1XMZyXqxrxVVuQf2xwyV4E5PVfRTei2UiEx5jKXAs8ofCVmWZtnUAqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TkHJMbyKfof9a62DH3XroMZVEaQ6iKn6nmmfA9RFRt6qdzovvEZwa5zuP5Na36S8P7tj9r6jmyTTTKwUbKeqpou",
  "key1": "3KxMnTHZihb3qYfDSbAhKR7XZZiji8xoQBmnHQUpWymAdMUZYwpqrViLDkd7zZS6XbTXgadg972tXtUCatNTT2K8",
  "key2": "2kirWXz6NgxUGduxat1NDneXpTCyi3Aud6NY52y5Md8u3mdeUWY498DR1XQtCDk3heeVgv5hSv4Uzgit9txi1hMY",
  "key3": "4h67ZYNNbbTdN49BhPQ2kkezj7CatjsdDyMy1VMcK4os8dVpFFvgqYJ98iztS8qtK5EAEcvfLrfv7mKzp7FqQRf5",
  "key4": "5QeBnsJGe884k6zwwV7YEUtdHa1t7qL7Vain2C5NQ8wNgw8hw2yZpsNdtyFpoYEhNPVfuMRErnuYSwAht7sYksy6",
  "key5": "4cvCD4mMnmXviVynyzCdiYbxNHxtcCHerjmdVixQfVei2pV86RwjhZH95L17F9DWtJ9RSuic4voUnRQSbf8uVvQz",
  "key6": "4VLd8UoPmdux8R3bHcCJ1sye7azgb9cwczuHQmy8jzKgwfiiATNeiWwLb18uZzatZCzwynsyPidTKPsJHh1YBM6d",
  "key7": "5V7CD5Mcw6w8eui4RfLdPi2h29Pqzrfooqz6V78jMwXrtrGeTBt7NF4GYu5yoB7VKiCzALadjJcsnTJ4S8fA6Mv4",
  "key8": "2RRUGi2Vv1ungifdGXfRSpqqKH57zNkrXUgf46vtVe8f5DJbuFdC6R1cEW6zBALwdMyGhb4gDFgJc4Be6vcVwyBd",
  "key9": "34NGyAuDMpnhYWohGKEcNPGXMcoQ44EdTMdrsttQ4bi6V3i9Mc3sfNxipNRdSkkmD1VC8f3hWPtbNZRAcsy2QvBk",
  "key10": "2YYsPcNKE4etQxxoGToCxrdDKGVAHnSsT194oaFQ3SdNEPoxZwD82YyecH5seKSAzLaKnZwpf5xTaFJijbRzzKNq",
  "key11": "H7edPsuK39TgukP5uvacXagRWfTecZjc7vcQEJw7PyJTxbXj56z5C85y9qn1htJfVEk7qrzfjq6JxZc7btqsP3B",
  "key12": "2FZmeax4m8SRtU8RezBuLZs9m47sggY2ZpLDH4kjUoiaE9M57NUSbdUJkEQrX8WKhL6SkVfzyRkeBBkBiT4q7bm5",
  "key13": "SAGRRDH68UX1p4jMsFM5xpVntPsWsgjAHYsvymw8T8UME7MpfYPztGdugESyVzxfo7bZeXrSZabBB5hEVdSJsR1",
  "key14": "2f12noM2SPPbZb7e8vaiQjNjBoV4Svxnjwy9YQWhrTbDC4Yhm1fyejxYg1AAwdFBKV7rvuUKABBhgDqMKVSq4EnW",
  "key15": "cV4pFq6zdSuA67bZojYyZAf65C9q5dbRScyfnayvNhnwz9TuvW3jLarHSv8HjZ6xM87YUTnHCk4gsvmvytJPCSM",
  "key16": "eAojGdXcpMEvNkfvpGnwgwR2DZi4H3TSgyxLv1oSQdYfzmWksa2Ap95VFwRQSpaHTKMtfMGBfjmqFSorktC5wza",
  "key17": "2Jweg8dx9koJT6hTdrTNCYP9hGXpAnQibWT6Vu9K3cVj1LHgF8X8KZKj6UsjEqBweXB1oC3WgR1rjmJNcJ1Qdv6t",
  "key18": "3yo1qFwh32VF42J36ovpNTtUTP4FYdHkFbXNcsjwFYGY9kurCX8nMJa8vLsmqRzDXmcKrAiyn5rxRvFVy3VtUKKh",
  "key19": "3oqANs8W4ar8WMuR58gqTL8tMrW8JPspqjnGJgpqEwwg3zepVfhFbcjXxTcbya7PUMLRKdJa3v1RGRhPxtKAz1ha",
  "key20": "4BrtgWqQ4nLcM6K6damfasfN8qdYHJDjt6hmmtUkyoVax8eAL1TieAGttotcZQdtBzhQStT3uZ7gQHpym6qFrLcG",
  "key21": "4pHEvzBKLMCe5RcWf2qUyT2itCcufkiArMqhQ3fJBFpmT1QtxrYFscK7boyaoZwoCz6GudabA4jSGADGnWrDAdxA",
  "key22": "2d28rDc27AwHa4FssUoFj8busjUtpvLy5sKxZz1pGTQRV5r44xKrJa7zYKUxMD8WS8Cu3FygB6r7Wwnm5U1n3KzL",
  "key23": "skrPy61S3iKghiSYZu4pXqXBQCNbGg5hTKYKeM4QAwAntr2Pvw2SthAm3NodWKNTP37aiVLHMg1e1CY8oyw7gv3",
  "key24": "52Ap3hX2JpyCXhwtB5BLvVoTEo6CvGfqhVpBLPoxU3KXgAZzkfyrwSFaMpuTF41yWxJWj8arDT3fpkMPhf9LDkcZ",
  "key25": "2EceYHXBZEgxTv4PYr62MMmx9wnHpQN7smKfyinY9nYvEV2ZJtNde2URxWxdfX5ivE8UCJUmCcHTTmE6qsGwgVxT",
  "key26": "3ELmLbVZyinsoJ98zR9PbMbsKjFQG8LqqNCUGc7FukDqfsWVzpPDSeafZgicYkjSWUd3GopFTJYYYBrNe1boddzV"
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

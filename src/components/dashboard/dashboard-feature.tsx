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
    "5BEHVGwiHbUkgsvDFTp44yqpJLY4psZHuTsySNwJkA4h27seZ3AwiwHAph4y6UK1hZRFR8i7yA7SwmmyBxu84SFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NSnJnsz3NQFasbmZ5K6zixz2rEN48zdNrWs3Cb5B1eqBdWsULtY748bHPS6xuBBB3SXgqHcsDvDbCuDNKE6cbkN",
  "key1": "2Zf1V9jjf4Lb1AeDSHDg7sbxsMfYMrennxThWwqG9JM1iiw26gJjMsoYXygKWWduXeLyEjuc4TseW3iZuDYL9ARv",
  "key2": "4HPRbncm1r3Gsna3dKUyiHbpxAA6AAGE1xCHyvpBWQGqhBcdbAWv5gvFXh3MJNe8LhccdTeSCQWDYpqpftm5CLDm",
  "key3": "21i4uRJEn7LRzpP3t2v7wstATgzorGtkcyCifjGXgpXeCk5UQZxZPb58eNNTswfQsMi9XgrgfZWXgTrsUBbd9yyK",
  "key4": "4Cih7DCDbDLSoP4p6noVqAvQnMzkyrPR7AjFFeheXVkhdPet1DXbGE3z4fMcy6X91ebtAFDbNwuoZvnMsXGRixea",
  "key5": "29UzVbmFTw1U7rT2DnkVMKn37Ko76T4fBEohdpjz3u8bremtauPc8c1qdcsz7GzKnqGKM1nREww7vU3TmnsjutLa",
  "key6": "4pxZg85Qb3KGfDcjeK8D7drggjDMD23wh2meNGXwwtJd8ReaMbaeqrqToshqRHoJMUeNvULWk3BNgdwuAvxzZFEX",
  "key7": "jzKJGWsX8o1kimdKm8f3BRbHZ9qM8eStLUMnRQoVoTDV4VWN5kV48qc2ryFCNJMn53KgwwNHVEyLpX96tXhLnPo",
  "key8": "4zwsWZEjqpEbUW9JbpqCEDHnMHTsoDpUUnkfpBcWKbSfv38FJUWG9RJQtir8SDRfoskfGzbFZfxuHdpknV16vp8u",
  "key9": "3BE7B4Bg9PugsBhh6L56eN2JVbRv3y8PESnDsUusm9N9yEdBJQuz6RY5c9kDfmPgtXu4GeKoArse7stEeLf6N9tk",
  "key10": "U63MSs9j3RrvEVyTHvYD6kobUYGTsb9ztRWtqdJG3djymjoeDwvwSj4ePehBtPyewpWqaJSxHnu29EbEPSkFNy9",
  "key11": "4udM558cEd1Tw1Em3iX8Kz2g4SZzjBJDFoLqrY4xwAkjfH8WQmz2FC6xNW8eDwfdpr24V1Arf9M382VLsaW6FyhL",
  "key12": "4Q7dEW4fbC5XTDRQAMQXfowH13eq9UQSd8NGg5bydDeTSGjtj7NEqMeqAuwJ8u6YNkMzPSt4pkRhscdHQLsdebnG",
  "key13": "9GsjaEh91EPEsc7PCU9BJZd4sP8XPJ7PBKXsdy6hsdhVFgJ8yZB878EwbNVzviLLeUqZ7Az4xFJyyfvxBVD4V77",
  "key14": "3zoHRmKLvHFHxUcLYoRZEAPLLxgSHwMfAXqAUupjSoYhmqzFuZGSVCbh39NEHzt4S4H4s3Pgr8ampJNjxWuU5vti",
  "key15": "4rpsSte6a4AHEQRwnngKv4WJQwaGJeYZFZ3TDELLyxAG3YWW6suZwPU8igdgFLkdchF4ij53MPoQvs4SGUu2uZii",
  "key16": "4EPSAifZM4gum7JyZz4ZFUZbrTbuMzKmpHyQmHBSTPFt5byPMMoKiPKfJzToHBSJVxXZPeQUvwF8NdUoz8LEZNoJ",
  "key17": "57djbw8ni4zPkeSuauFhNG937K7rHoyVfTgQNvUzLqszq8WwPuivovenkwJqCX11KVPVFhs2xAGDd6S98XifTnj4",
  "key18": "2NREqyRHVk1onEbF4qCeoShRrjeSA2AbdAbzPLHKf5CHMPfJNojfndvgB27syTRDFeC8BHHihiyZvixZeZ3krSfT",
  "key19": "3DQXWdiw5QmYVvEyYQzhU25nzihQeZGpv3JGwjVvZn8keyCDiFsTyLx7sEnVuSk8MicHZFAqc4inc9zEy1LWSd1C",
  "key20": "2JKuBLXz8vdrSXBJKsEvwYCVu8WhFHTa2B4UxC46r4d93Z1uBURGBKZjSHBVT5nz6G7J3QzuFiA935dsKPdcp9Qz",
  "key21": "nSdjZDDT5titKVokCtfKbqEy4vpttuQnYcmx3d8AdCJ4N26FVdG8KVp9Hf237tF94c1tU3sb6Zq7ptGFLZfoZeh",
  "key22": "412qM2hXweT9HnXRPEXoMfogoLc87frJxr4cDNvTLeUrEZpAKyrN59YVqdTG2YebuwR2GnkgfQgJKjxrr5kvXpcV",
  "key23": "395NY24KLw3r7vX6UD8JcmGToAu2k8VaJgtfL568yJJMFymv71q3pyq8t2J4gXXVG7quPWRQrk9PAH7Svw6gpY2p",
  "key24": "2zbZvSFXDa4UPkaddyCNQ9D2ZvR1VVe1WE7fB7VdrjpqdtJGXyi1MjriivoQJzLCwXCjewYQsdDGvDNQ1VGQDLT7",
  "key25": "duu5WfTHTRyiDP283uW5Gm59E45gE4MDVG8d7Z7x2LFc5CVh22Jizf6JwcuTcghHWxmstoAHfkZ7E7EsNSxywhX"
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

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
    "54DBF1RqrwF2bivpy4fBxHzw7YJh7Lfczc7Vg8rka43UxGEEMG6P2X1VDGyYuJgj4jAHu2divaQhfqgfRgfC8kj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhHk6TXU2CXcsFZQ4NNS3bhZW7LKfPz1PDq8cVCpJXoDfmZ3UyWdcbyjjk3VR7QDYa9qgU1NdZZT7obxbWw6Ug6",
  "key1": "2ZEH57CH6rLte5rvapBJCoiugoxGXNsPA24ZQF83FQ5awKFDUCKiGbkPkSnrpqcoicmdykyB6EBZgNEyvHkeKfVX",
  "key2": "21t5tTJM4rnbt9naY1L6JoYrNaXFZjDKCoH8jHrNendb7XuWT7UkEorvxTkHUBk5m3KAHkLeWj4kGyy77omBuvKg",
  "key3": "4LysBAuNnCCimE4UdVmeP3QHxRP5yJ1vGUB7LfXskEPnKWJ9LF15mT2jsB8YQsQYaGxSq87auPoQJh1i228gwKSY",
  "key4": "2YbALYhGVwqqHg4UrsgEQWnYWiPH8P8Nuj3ggnwh5yuY9xLZWizQcoKuzavYMzW7n7Wv7Kk1caiHU3ELg2P3iXvb",
  "key5": "3RVVAHYrnUkxoJZmspxsP5ELKyj5vXkfx2A58ifbnP2RSXgwf5QFqyQo42Uhi9HaQeCHoT5Ckcxadby3s6r5PiCg",
  "key6": "eus1dR6Qn187LJuC3t2sMhthorN1U4Wq7SD7eLjmB4WnJju4LWsKUGDWEVWCSSnSW8nisBMSbTwxs3x4sd75UUM",
  "key7": "4795ukiKpdaVgDLjkkFExz2NPM9hgFayAAuobfUT8LyQUfns9rT1h99YRfXU1RRu2cuyqRJEx49R2rDexG2iUpt6",
  "key8": "4VSz3XX9qJoS1skYZfsAs4JhvXvbm8dBDTNA2M1gunbckmUiMLAPcSRkTohmRuhFK5UNX4bXxpLNbfsFzNc82RkU",
  "key9": "5J1ATbsZayJppnfFSTEn81tGZyDraRDJFhxFrrBCEv5VEzFxRrQws5HdWC7dLthiGNBpEXeRqm6AjjW7aaqKNHnw",
  "key10": "5A322CrtPHKk7jhfyChfsqxZinRfyrTXpQB4YFWuFa3NqVgoHXDY4mCdUy22PW8HWJ6YRhjAP8HDU6nFieBqoR5G",
  "key11": "2jnW4VtoMLyzSHTxHacMnGwT456hScKejvrH6RwusB2g6hLBvQte6UXmVd3RNiFZeDDGST2GWS4QwrzKLgTi28f3",
  "key12": "2ePy9SxTJnxssf9NGSUd9CgdX6F7dPtG2YZ3ha8bmJGeKBcXM3Wfew6z9uYWKyjm8mUSs6Ji1EnGQgpwsKiZNWrU",
  "key13": "424aCLA5VseidoamVTo5b4YvjatSNBt7CmC12GEuAKFwsfC5FLTkFvWEYqtbxUzrjkGiNcCi65cn1pFkQehviN69",
  "key14": "2KJk2EuRkEZWSqYigs7vBi6epY52Jz7RJBk7YYG3mR2qLKWKMsta3JgdoAZpYdwx3ZHNYEQS5skrgGbyZXYuqy9f",
  "key15": "zhH1HJh4C7cMoaUvvRrbwa7ikbxCwXjM6Ma8PGv5W1nwHGDwrxKVypFBUujhNSbqwLrdPjroiLEPu58U1WiXVL2",
  "key16": "4RgWsxCmkS3NVBRNZ3fbS9QMh2nuD1WSTUPeEFfTLP3wT4bhFiADQXjAtxLtsdkyfRN99hgjkZmZFRjhCiFAjfph",
  "key17": "WThyvhKJdZpm4FZTCvRH9FfvgcSzLB7rt62ScUkmUriLetH6uUb7SBmSvYToSxw977hzT522ZmyqMdi6UXqWHAf",
  "key18": "4wDfgLryez2dudWug8iAdPFzfbFt3q9BdJLRvzc44mdDjeDSnSaJc58RcFuvZ2gaij7qZTaK67T2PER1yq6Pcgpb",
  "key19": "2awn6reNYZoLtVXppGEEyQUc2ceFMKudD1Gzq9Q5TZwsMXYeic6PPbSCJmGrnHTvZuWx4cdrXxRhd6hGcFqbQXZC",
  "key20": "34MrHRKzWgrqWEy4VvCvh7F9HrSsxtCwuWf9nRRH6VbDRCz7ttjwfty17wezTQtiKmmuSeaVDa6qBKTzsyXXxFSe",
  "key21": "5Labd1z8QqC17FtSCtzec9dDnV4o3rBmRRPuzYHmanjkz98vdFXoi6vEHSVTTq4z894KmYZpUBW38V2e5eygE9kV",
  "key22": "27Zd9Zh5j2WtenmK1bPwArCifHFtZb76r3LSocfHD8b3GdnGa3JrXbts8JAPYG9cAEg2VD8k3ndKdNmDDyrBDjxs",
  "key23": "ExKH5NusvjNHttHv9KjF2g1pciTXeghEmAV1vsRag5qsHGqDjRmRCd876X8fxktokdpNHkHvLA2T8TPtpWkZt8Z",
  "key24": "2PLZj78R5fCEDBderE88kEKyFJZBp86MrVwTnVAQqo3rekRhLxHyFMRhmpVRkPZygmsBGKDBktEQyrSEm7yvUd1P",
  "key25": "664ZtyRoyHshy9NfHXv7R9g47BRbDanUJw4rEhf5yWyXABfq29b6WB7rNMrp5LZMVMhoXXuqbnupnmTfP3ukkUfa",
  "key26": "5B86QHxpEqbTDss66WRTvrUSUueEgwZHqiMskQTjVRFnf1FSTpEJ9Js6Q794pLp2z3uZ8TntfEQEFXKEaJ9EFT8P",
  "key27": "4YpHq82GF7TRMSMkCrc4wFKXLMzkdAzmxLF24YxzPN3HuyYU8YoVVjmwjKMeFK7RPxrZq4WhHKnQhPu6AZdyNoar",
  "key28": "36hoxjgZCprFM9Ap3dUcAgU1fFQrRBEHgs2ZL9uTdwyaFxxurd9f8XhkqzPRMWA8JdEhQ8K5NSrJYYwDZ4Kptpcp"
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

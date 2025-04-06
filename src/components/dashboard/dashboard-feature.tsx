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
    "5rAnr7oQSkJ9JEudU6yUbe4A8bkdu3g6RkGvYSeAem1fupakYYaTRzwuKVEgSzDaTT8Lh6wDDK9DGYQeKQK1RDEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DKTzcMYhoAUWu1Nz4axYsjWUHFaMpgyjbRgfWknkBqA4evs3dc7iyyZYiFTKe5G7FFZx2ea7ADuy4ZF9AnQN1cw",
  "key1": "39ECKjsHEqhhvwaQt4dUvkYVzYMCm39cqTZapT4boC9iDSzZHwLPDFin9kPiHJwYPHXd4d9kLxLE9zDuWrggo6G9",
  "key2": "512ded1AGLbQaJzyj9YdpgG9E4H9ncR13GTxWS9uyqXGHK1MNeyzhNgQS9uadxLVb65vcwJJaLCfmu35gEBqYokP",
  "key3": "2bL9LhYRMW9DdBbCA9RSHsHiEKg3oigUyZTGwpC2BoV2LS4hNBLxZK1WJFwa8KDu2Cs3JnoqmAWZzLcRfAPqT9na",
  "key4": "2meTJhg2z4gwUoQa1VZN42UDz2sKBF5GNBBSLuRYuy4h2p8ZJNB2az6JLQ8cEJvghUPPtDJgqX6aKd1chFqnbX14",
  "key5": "5J4VqzomviLXadfqEdK2JvwcXBc28p9PqkjBF5Zd4ZHM4CRWZD4RzEH5pKsu2jUsVezeGgihjXkipgkZ83uXUj65",
  "key6": "5ppuZ1fsf4T2hMHc7PkJRHfcJsofQSUnXAKts13pL2zYhTYAWy6mZX2TtTqWTRQbJoDZfdaYbPZNFWZJSHMWvCQB",
  "key7": "3KwhSzNWu4MZoVq4oq2toYHGjCadeg16ScJaj3adNxRTytTyhsKahvS1qTifAggNaryqg1m8zo7BRFtTcsW8qAz4",
  "key8": "5pkWmm8Kbr31T7ciEB7u28ddhtuFsghQidFki8DJ8qjW6EvXiqmNXDDN9WSDNTfgF9BAvJrvFMD46rYKFeNHMbud",
  "key9": "21FMwG9R9fdKc3TSzRqR7DwSQjhfrkGEzXSWpK128rLy8ChxrB8QUfQbKEuSU3xeTP7wDjmesHpw1PYc9UXAWCy8",
  "key10": "2d8M4qsNJC2WsSMh2WNC16BmNvThEQKup8pcSa2oMj32Dvw8Yh5Rp4zmYjCRmZFHQgtzf8QZcKtxLg8VR7YdhAoT",
  "key11": "2owLRic19aNCLB3t86uuG2KZxUjjMgPRkWW6J9N86WCxSmUwruPpanbfak1VUTZpQoPCefj5UnyCqVLY3MyKekNu",
  "key12": "ChvfxecWMbLmW5t5bUUBA9CRNQBR9W2xfFxK6WuxBzT3LQKNwzkGAhZvj7rzfogHPcxhW9XwaTxyJCYKpQjBEan",
  "key13": "2rvZuQJKKw78QuWoE2CnGUVtFMVEKPHBPv1HH9u1SAkQ2VX1ZA3CHmpVL1m8fC9PTXbnvPunsecVrpkGad783yWj",
  "key14": "EZbBC5sk74zQSpNHZtzzUYuQh45KUdr6HZqHkG3Y67hEnCatg744rWDqT3A4Z1pjMbFSceDB5KzqSWRXcrh3rct",
  "key15": "Xcez9S4qymzuLHkqKBbiFhNfriSCDrsKVK3swkNyU52akCSDunyoLVNUYp8Tf5MNoujZ7LGaHRytJKTkziqgm1n",
  "key16": "2AVStMPakJZCQHdDwRjiwSb7XZNHrHyscMZNq1noYnJbVjAbPkTTeFqwtNpurzEU6zQ1Hr1m12a9eoTtJd7U1QNJ",
  "key17": "4Voy8LfMnmKecWcJHBH2paTfPMyfSTYksmCQ54bZLbDmVQiCBh1W1CksTugukh3Hf5i685jWC6p7b6DiRT7nYkTS",
  "key18": "3wkh7ZALqWjHoHV2FHVjnzP8RviSmr1EX3X54Eb84vLWD2Fsae9ynWHScqag1gpcXdxNMx9b6ocLLiprojahjhw2",
  "key19": "4kEmHpJYR4KSQLvmQ7kL9Thi4XNmQgs4aqg9L2UoFds359qbDixXRE3WUbFBUCu8J29qCE8S55omU9XaTWysM1ud",
  "key20": "5U7wYddPJb4X3vk7mdzaYFCbpvUPNDkvbUQKt5K3CSX9qDrqWukH3Dn7bdFHNtB2dsHH8py5fXz53SHgUjrbp6Dr",
  "key21": "5TFTEnYKCvKSo8EEMiAWapf1QusQ7XCbn9KKtAPYt9wugnu6wmZqJFEtmSo8SmaKX1KKR2QN9wutApxEA1C8kMdT",
  "key22": "5yAGMTHXQKBduiw4HzWRbTZzFSKcWRAaUTtR9wPKsWhjaeoc29a6qhUTWspL9obp78PgCjMLR6ELZoHLkDvc47wZ",
  "key23": "5xZu5EQ1FPBhcMpfLVi4MtLv5iqAEne2sySUjvxNyvR6QvHpuJnS9Fx1LrR4PX5sCqNg8yrSvFhT8daihkphKkod",
  "key24": "2r2B3wtjGgYx94h8Se5hnMftX83AnVusejyaWmSGbjZTBAc3Wg5kVXEVJ1mkBPRE5i1dUPyfJWyioddkBjW7tPRq",
  "key25": "4QnoaUPaiwXuKgY82nt5ZUoX9ijmaN3XVLaczYZ1CMiqnjqEVAQtKKX84PHjjfCgTqgDBpuoC2uEeYFN2urHwsyx"
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

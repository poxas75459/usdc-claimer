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
    "3EvwVaAuJeuj5CZp2GiaNrpRjaDYJKgcCHhgq71BYHHjtSZ5AJzJGPkrAEA9RDnDAkd6bF7cfPMHpb8kMhh4q77h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54w1zoWBdzfVAMUkg2h1huaeVWV7zaiwWi1pRLo6Xf4wEkfPfS3YtFbeFk8cy6i2Mh2sUFDzRJHFWiKvPLrhZJEU",
  "key1": "5hTBt5ThbTLgRhuxqrd15rBvi4ZshR3yote21H9KngSKwjJYhnUbrLNCZpjbv7WEyd9QqSSYyh8XjuxUCNpKApJC",
  "key2": "Gs6dm7R9Rmf2TuB4YcD5nmxnwuVQiBwx448SJxfw6zBJUt1Mm7peLDcnLB62X7yKipT1gtcBrkMuf2PDYZH9PTX",
  "key3": "4vpChh8PWmEdGyZPg7TfrXvbwTpGCXJjBfvw4GYudfp8tfAbQAgxuqWAYAnpLWmCMyiTwvAMoHjkUm66My1gwhN4",
  "key4": "64FpcvFa12PjCDs95xetYRtigNDwU6XiUqCq83q2miCmH5FV7UqqBFUwiQKr1gzSDebDjgzEqSSEYMoNxjmpokLY",
  "key5": "4HDGrTXsJ8LVqwG3D8H1Rq3ShbT9mdc9AT5F16heRkAYrVcQTU69JTDP4Gyfk6naXCEQ8XDUv8LRTtkQb2J3f1go",
  "key6": "3nxnEhRoTGqtyCWa9RyiBCqfT6U4kZB2TJnhBQBuPUopygPWjx5bppmGjGDtKoidzCrJqM34pamkcFgW6zwDFmcZ",
  "key7": "3bu7ptAfW1eoWposmTi5WcbE5PMZXgXjgkyCom5JAZxVLjLMxdiSJv6rrZ3WkCT7brQgCz79sPmD9vZMMSTJoxyj",
  "key8": "GywJzUiDhesgLY7ucbKm12UKyp3Wp19akXixM43cHja1BghxHGLksQVtsBfmry9mF183ELRhgUXxyFruFa3EShC",
  "key9": "rVMCuAJ3K49YDCSVxzGJvmaZ3dUDfzd9g5Qs1Uwe3vPaszeyfqkrMgZXBujMZVvMUyNHgNxwsy7hJdowp62Nr4u",
  "key10": "3xCuiw7uejVACL389vcBy5uWMMT9jZ8hxARjVqPEYeLQqdBsg4eUA2UNyDhZLEABiMxSoJRosReCT8ncv7UbHVe7",
  "key11": "2uiFpca6CJKdMdApsaSypnoggyNexaXnr3TvgmY7e8ixeAuJrfRzmkT8YF7q87PBWVQwdihHkXkXoRv6wS48i8hN",
  "key12": "4qv1M6AT8e8KotDEE7bv6sie4WbjxAUTZsyg5GJ1vMaA66vEYzovctkvTpCqgnGqgLvm9vHHcqbPt3WdJazMY5bb",
  "key13": "5GPisuo8wPBFhdoaFT9Xv7DjiJgUvP3VRtRaCCSpR6ehgChCBBtLckemAPMzqkbrySAwkwYHHALbQmpqC4EPegPd",
  "key14": "4csPE72MSvMqs92kfj2s1AtBiTAXrZsqoMsQk4gZwcC9kta2At1ZnbLJ5zMoFCEfasxgaomgWGPHmpYMQrUFbbKz",
  "key15": "3N1BZ9KPT7RBAZNcscCcPB6rMArm2ZFRYm6HNtFfXt785E11zsuXeXtbYqRDm2zEwtnwvNWomqWZax9jZGV1NJiH",
  "key16": "5XkqRym6A8f4WdxTZ5Gj6MvuNmr4dtusPqWn3MMYciURpT6zKMo898A6suej3mk9ej6FUfUbeKhGNkiP5A2JGtWE",
  "key17": "5bPTdLsdBuyexyqto4X9U9BkoZQy7YF4AzHxzNCkRCCdBixcpeA26YM8TaL1FU5iqrP9UR4dWxRXiNzZo7xD4bxG",
  "key18": "4HrNjXrynVQ3mK7seewBdS6SaEUtw8r8zFpvuB8U38DcYW65r47j8uA4nUfGYcVX9smu7sy2LFxmFAXvvPMMgLka",
  "key19": "5HQFYMSP77CLqFLkh7zTngbaL7yjbqzxye16CieRi5imGtDYcZPWEE8YaRSoden74Ph4jWyTu2YDuWEPAaAJMg4r",
  "key20": "wFtrD2QdWMHJaiDLgvjA6yMvvzzubNv2TTDjzu4GY6HqiA5pcpZoTS1CAcwoAsU2n9Us5Kz2a8TXRs8iYpDdAGP",
  "key21": "3zN5xQaWbyVu6EBpPjbKFmbfZ4WukbYFWNBXnWuvcK3svf6fY7ebLqRu4oc74pqw7EMfqS1nK3yKb1r4bqY5m2Tr",
  "key22": "49pFPWwQcgwNDKWD16cdSps9UEAANVPvnBXnCPYabJzuQU5gvhHGVvCdVsUtu3RvTfRhAJ6Dek8jc2kNNAD7g2se",
  "key23": "w4QCFrL6rkRvUAodXvuy5QSxEdwg959hrbBMrTJ94xr2qfA16d1VKpEzd1qHGcybS1PojB1DGB5rMwEMpBG5JuC",
  "key24": "3QXBwhyPDibayRjKfyXBiJiFvnHcaa3LiBEZV21fByRzUusisTW5XEFZ5XJ1CVn9NnvXmY37AJJstPooH2pENqP",
  "key25": "47pcJ1URH5UrJaLEo4z81MVKceUTwoc8rxtgaGujx4NYjbd8hcqnM5fB9BFFndTgte69PQkYiKnfBHGkHiCJUhHA",
  "key26": "3YvvGgxJq4KDkj6YfB5v82zxXBn6ETNAPhEKmqhUHGnjP57fFizgnjETVJrDuTicivESMXSf8mpXoEiTyA4jvKUh",
  "key27": "2aaGNmCWVsRsRKcKUZcpxxitR29CugYxHCNzw7t3344X2sX3LtZSCpdrYi1YGnkXMLmKPq6ogWT8vrq9ZhfT5cs5"
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

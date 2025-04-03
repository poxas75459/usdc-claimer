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
    "FEPTvgpHBmPYnU9SPYeN8TSjTK2bHBeycxVgeMxZKNs9D43G7rM6KHYQGvBhAowigQXmj55poWVA7vyEE7tuvX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59KDCorNUXQ5ntgDnyzMGYusQRLJ7deQdnhL9nKfEggF7jL3hnjACw85mr8kn9TduTN2UaTKhJveqRiFs2Dvvswc",
  "key1": "Ssgb8dZ6JUmXBmbqujssxS6FNAUpVxbwFdW5W8P71wQAon2DeADcMSnT7Di7kiDSzMcGvy5M9pqsw4QUsBuiJaM",
  "key2": "5436VoBuwC5b4MeogicQ7WEVhFjzJUNeNQTtPM4srb9u9DdJLD3ktWr91zHGJGigStGZN8CNdEdsJaDMRToGx4vu",
  "key3": "LsF77c3Hq8p74Dhhjd77SGjEZ4qfR4Eevf3w4zJz4RaLehdJmTx2uhyTTSZ2W6hhWc6m8JrEa6AoKwcZ7p65Hcb",
  "key4": "ENkiPLynBH8h8FtXoR3ogye5Ehi8LYQeGR1UMDCL1jHMawHEzGR92SfHy6aA6iDHu1QNud6cjFruLRBqrjjQ36Y",
  "key5": "3UZBPfvweJ61m1sk9jUUYVKye9h5g17fhd9SnNshaotkk4mEGZXM6o9m5BFUs7W3jchLjXAxZRU9W1JiJdVvNxub",
  "key6": "3qVckPin2boetrjkMtxUAQ7MDL2B3fPLM7Ev8WGqv12cGzD5MSyJHuCXmhXny4a7P4BV53qoECc8XcdDXEPpobJ5",
  "key7": "5Asdv6HSuoJbi9pJZfHLhNaRkPckpjqQDEmeDBMCbirSAWU6m2BMiqRLVb2Qy3Y6r4tgBaoJ4YijrSMHm4QGcT2h",
  "key8": "jTWdsubB7WG5fKZnvYAJEwv7Adw4CJ7enZnBbcoqpwUB8qt4yCS6mwrJky9XnWMNgQpFbEFx68XqVmixhi7Bc1v",
  "key9": "4HD9MWSVTypSvxN7T8HWtNG7uUab88N7fyA8GmK6yCa9qyGgMeGv4iqjeFWaAJT3B4FtpuScgCtp64SC8A9BgWRd",
  "key10": "zFhgrJqa5hKQWnhW5pbatuXGkFrFLTYhyDss1cT4Fe34VB6geRxvmdagaZoMDX34ukkNLAeiKRpns3hxwJCYxuS",
  "key11": "3co8jdkDChCgMF8ndczowafmSk9eeK9vEHUjWZ1hGoPLSMuNdRRPby4Byozn9CWMsPm2F6rD77W3rT9AK21qhjyN",
  "key12": "Er4NWekFXzu8radgvX1EUnYyewD8gzhvSYhXCLH83Sub5ZtrJtJDcKNby8dXskgKyfYE4U4HrL7mBcBKuSPoQHR",
  "key13": "3SAoArt1ur9mp1ukUMpoFyLiwYCQbgZENu6w34Tz9buC1H7QLcEWUhpLf8ETBsNMamFMSi3ot8JjSqo13T5woKDX",
  "key14": "4a1rdbitHfuzGbsNX9piV6ZtSWNoXxzsdbHirwGa1qgY9A22pqwCdmv95Kk7LXScN3xQMdz7U2iHJcDp2ar8zKzk",
  "key15": "2r5q62j5UeXZQviY8nqQJP8HSXZuk3n5LjJHPTX4uB9ShDaNn4xE1M75Q4SSppApaCicUbFR5BFjFouuPCPSnNLv",
  "key16": "4pM19MHUJ7TtehgjbgzoeFg3jtx8oa54qF4VD3g5WpJtksVXCr2YGeHtVzDskMcqRgt1CyqJT51KfwN9GBHmfz6F",
  "key17": "4PhTs83ZijPRuksuqAhCsgcK7F67cQTriF6qcTnHVRuRvWpuiiysb5adRLrSSr3xQ4MeVM2FmjMtZJP5cZqVtikm",
  "key18": "2dqwYNsfRqCECASbT84LUPWv1PNebNMXAnSosmFCa9PFZfNi577AKYY5gUARMaDA1G4XzV8G8ruUTFcdaYtF52Ht",
  "key19": "55ACT4jY9aH5PBt4AxqrkdJ9KXGzCwW1sF5qavD6fY1pJ6pF2ZZDtT4ihuURJuUhc1sR7bfCnm67eqTfLmpP3GLx",
  "key20": "NuT5mmvNjBH39PwT1Qs9trWHSYSQ17F6ZTMen5gHCUZE4RedQA9nBdyEAU12mzikmXMXqG116euProYiyrVq1tU",
  "key21": "2VnshTw6vbfemvHzyaJSjcnNFn2wP7atBPmVseJLy7GEAgNUt48eMzwbEuwK8FfgWAhjBEp8LfhyDQhoKxYBbUDq",
  "key22": "45hhznpFrZtKYtGv3ryLCZfkZLHdE36J2xm41XzoFx8swUnZrmzzyJmBL12eu8oPLJ3aWpLnr1NUox7VRX5bVe4H",
  "key23": "2b3jVUAT2Yg66AWZdhzmYdaZKT1PP1N5xpwcEAVbgake9n2yLXkgiRcPBNF5xRhKpKnr3FFvCFWnRBrjuRKJWzf1",
  "key24": "5RSjkmNojhsQopMNUJzUbACVWrfPXwNHJvQ5bFq5rufibAzYogyFWhLGLi4MA6rbW7DfxKLLRrDSTrfJquPQs4ss",
  "key25": "xPXygBvSYLftF4FV6b8aic14x1He8UGqXJi6MakXDzZWs9NwvJEPrXSWWk7CX45mNxbW3JcHinkNqhXP77xQc7x",
  "key26": "53xwEig7njfCCjCE4BroR6XT6ek3JFeqBBQsjb1pqx3UU7v2rt1PrKHrhqZVs43kmiRg16dwTn2oDFbG1MDFpG8V",
  "key27": "289e7CQEMKzMFjzGDikorYnDhBUYiFy3ibPhu72Nj6p2pUEqb2jNFC4YwJJYEJ32GwSDwaTU6tGP6YcNPtChHXSb",
  "key28": "2bRzhqADBCUwB4xKGTMVtfWPQCtTqqEHH3bzHhVB43AmWFCw8idUkJM9LEPMNdyJdGmj88Ut3UaV3TpfQqLM2LZH"
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

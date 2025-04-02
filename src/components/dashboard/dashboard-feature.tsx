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
    "4ipxdDx74p1qbLkPAyA4vJBJ1QpMPsAs8Ws4iWTHwwFs3bdsGNX4wgknGfEeye3ZLx5vYWXVmMuVT3awrdc71KsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24g7Rs66qDzKkBzXnnh7iffGE8w2fFnbZnkKWUt2TbvZEVwaN1qWGa37wigwJQ1kE6RNXHnkba2GwW3R6qFYhhJe",
  "key1": "3kceJnWG5DvKz6RVtaCg6jfskdWvW29XoLTdf63Y2KvuwuaZC9Yc6EWosFHwnfAxBi6qpwoGvLuF53ucRt3WtWrL",
  "key2": "4xPs4SMck44e2wZK6DNF4bufzLuBte2M2WF8cRPFgBVnMM819kMizgmNC3p9zJJup5xuDc3iaWp4XCxiHzY43Rog",
  "key3": "3SKsiUXBsUsknXCjvpphP79DVtrGzWwA15vxuEPEy6Az8rQHQvXP3fdJ8rvPSdL163fBnkNGnVgVWd2c1J9ctozb",
  "key4": "2kRvYPtHMmakk4VFWhjpfYp9HV6ffXYgJnRh7xzFmjdtxquspHwbFF2TfjVuvvRJuyyfBTM7kVHnQ9jM54SX9CRQ",
  "key5": "3XJWqgnNHbeixaXKEkofjZidversyyavFDynZv8p9oTnfF41xWFWo28ZiGEEDFy1HWWhp6px6vnGzETX6vs41NDE",
  "key6": "2bcbrtCLcocsk28XU5LLySdxgj4ftcz9yK31vc5JLdZNpkXsU2AxAx2uekTgDQ678scE32smcnuZDTTQS9Zj5TS6",
  "key7": "5crqabAmCDjNRU6q31W2vAp3BXXRgRA1bALuCvspiyT8oFzSwN6dxzWMVHeCHD5S4V5Q9RgPF5uZVek2ed6FybF2",
  "key8": "3VHhkVFNeciVWPesRXErYfXD96m9jLjKLuRs1FuiNwAKp7Dp4EJ55SZnFqMVzqGSZS8EH7hVwVxpqCddBnCZk5RY",
  "key9": "5ZFnA89UKorN8uGwaCagUWAcMtG1o5TpmHx5HtoBfbFVmHjGtPAKnqwVxSidSJcDdxujZF3E3G1tKRACcg97AL2U",
  "key10": "3ZvGxh77LxvRMee6zXnFFbH2P652QhXmf1mTrTd2aPWp4vZoxF13hhHcumWs4QbZetgYJwx5Ej1Ev74S9tAj45oo",
  "key11": "2A4VnL8itW9Nsw6R6FHgNGKs7RPSdYPfjSj6GVyDbQhaMWskVbnGSuNjN3WhaNE6XsP4DUBT1YBx2QxF9XL7y81P",
  "key12": "r19UL1JiU21EEZwK6CR15aoqoNBo6MZe8cyYdYW4mKzTgzMLMX4xbvfmLTA7GAMLA4vYJCH398GtYTNFUMkY66e",
  "key13": "2n5SreromCPxsYvVer5mdUozqGiYEHKuRdEx8sP1ti1Qkfegn6uEve4Efq4nPY1GRgfzZjrjLcpwsdmdofEPfsQ6",
  "key14": "4d6nq8QR5V4zogPMajo8MoF4nvfadv6FzH35DfWxd696SKLtXPPxYVpk4VAa8Dho9Ma2uh5fUBCRz3qXxH6knpHQ",
  "key15": "3Sh298FzLRVj9HVB82DxABcVcewKgJUW8yfKieknd4aLckvrSRcrC51mVpiFGkfJWKuEmQE2CDjNZYrwh2NZuth1",
  "key16": "5yEX13gZ1rUrsriDL5vARCAJ8sPRSMBPv4jhA42UzRMoFLJQ8aAPYRQzwoYv6QpD3MhMhv8cSAp51Jhxi2XaGuH3",
  "key17": "5WwRLPJhyWEC8bxRLo7i6ypsNKpCYqVeFqDQAjGVers1zBWv8st5QF8T6R9CNYhgm3GdzTGdk6r9oSWCxdjivPNf",
  "key18": "2FQmBib47eoZk6YF5nTanuEo2KpUdriTcV6ooS2soQTEAJyAiu3TeJtdpwNwTqMqWSQnGjYx9nV4QmsE7HT1b3U9",
  "key19": "31NEpAwMq7rM3rJSuw9FM56aqXUYvP3pTHK38L4xYpEZzHS2PiHEAe6gPYdzg1BWgM3py1xvkf7xhVTPDpeV9krU",
  "key20": "2uwiRfVKHZaVK7VWwyiLyy23Sahea3BZ9scJ7gFr2yCjTH8GFWFVqE8DHcrEjikRdLS8UGYoovKaFv8GCj5mk7X",
  "key21": "3gsUAXmr7uNTfVnMjUFcixkmCMimnrK9wfah7DArgXQQmuRSSQBbi1VwZCJiYdkyDpk5WE5JMZqKbBNePshDWFb",
  "key22": "3NsQm7pfhqPoLapeCsYtr2YsvDCqcMo9f74CmrB3hwJTM3KXwuRVuCQWbDMj2jH2UBEyFEykzPoVnnykCpEM5X6Q",
  "key23": "5z6YV8Ks7KUTobbPpg8QDrU8wV29GzS5Xqpepa5fkimVuFbWELHJoNkBUHj58Dc2Qi5sf16wAnmzSE3fCZVKgWK8",
  "key24": "5jqioTwNo4HpQxuNGFHj8Hxt2sPJEEYxGjN3dECavXyhkBGdSUQsfkGdTx4WyVyJUALdaadKWLtRjKBs2BRMi3w4",
  "key25": "3C59z83PZsoTzxzzbUvK5pDrGAx1e4AJLqPGgF1iXqQz9QarGyjPMi2wmn5aJZzMZQExdRtZcDNSz7wjHH2Fxywf",
  "key26": "5TukyWQMPGpFwd7dB7z1owymm3KiCduZSGry5aCrp4hrw7Z4CjM1Y1k1Y8dzsDgKzMqA4ZkyF7uMWZjUHX4tZzuC",
  "key27": "3HX3eqPgtSEHzoWSMVPwzp9YUP5JsLA5XsNDu7eUogT7JiqFQC7f1ttMRBcuDwppZKx6z1fCnB8vQx6Lsrw2SLKB"
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

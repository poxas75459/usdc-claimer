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
    "2oQu2Wzg9CjRGjy7je5pZFaWsY6FbE47NC3KSF9XX813etT3hHMAu83kCCQ99we2NDiu77edzykFhi4SzeVh1Rj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kw13eyfsR21VxmaQrF1Z9q7kYej6EXD6DA7yzaqLjAwpBJMquWiG9W1asNXpdLZMKTWhVPAroghWZZV3f4K2Kgy",
  "key1": "3jqrptRKQoWJqgrXrJ9ij73BWiL5QzJ3fJFVidxYRCNnjbuk8wCTUFPgNETUXnWytTXAu3TcU12uzZAkJA2FNWtF",
  "key2": "5XrskdVNjfDPMSJ76wwvGLcd9sj1mjAjKtaqnjWMhk2bNrMLpZU9FhULJRKFiH7rdpismyyjELEC6MKbUv7nDY4V",
  "key3": "4k3vJjqS2h8fW8so9riYdKq8vcFnzPeRdyyLrm8g4thV3QLBMkbpiG2NPQA98Y5r71kdRas61sgw9gNJ3Anr2k4K",
  "key4": "25vqzwLjst7E82GtuQKcpVV98RcGaro1gEk8vuLNeYfXBL3UsXt23obXH4m47HcvUVthwZ15nx3L81Q6WiBgjxMv",
  "key5": "4BGNs6mzEoHaPsbg34y3JrxZRNSVZyYUt9YYqkEd5LbKRxzvEs9Fqg7uhMZ9bkmdcsMNo2xQHVuVdxcgYkSNcVWA",
  "key6": "3Mii9mHgb2JmkueazD7kPsx4ikxjbEZ817Z51vwvSZKVJUa6DerzgTuN9SPECF9Baa2rz4oeFbDEPyrQkZRhVQaz",
  "key7": "229g7yXSQncwcYftLk9eEh6Gqxo4bHf37DwXki3WSXZC3D1EEWGCjhjsX4PF8ebihdhHkMvD1dyYHadRT7E8Qi3y",
  "key8": "2hS49UhEZsbmbcRQKUGg7DpuPbDYQjS5hD9hk6eA7XDynaKmXUkAR3AYRiFVxyRNi13gFM5gDb2uxUg2jx78ARG1",
  "key9": "4MhB4i6pSmjUJAR1qQMKSLkE2ySax98dkAVCZ6XSvqk8KaZ3L7Mb3RomrgWp8yGqP2UNe1saM9eYrAQivNwNAwmb",
  "key10": "5xNzT8CGC3ZzisnjXP1Djx65T4hEbHsCLcvNLUvNXz6oXdtVf3WzdYaTePGmVUEPjzxSekMUn7JyYXrfwXowpCFJ",
  "key11": "4BcPejzzZWcEsT9eAncuFL5DN2s9rKbkcyu97iv7juKsvtGyLy3UDcY6kinCNP8SHrNgWtgWSm7fe13Wro2tjrMU",
  "key12": "WuTdmhf86nYv3buXY3nENPP9HqEsG8ckWdjEaTiiip6fDf92YWip5XwCvnUtjLKjfixdhn7ALGAQv35U1EFnRYP",
  "key13": "2QwCqTzvaAoyKyjnkrdGs6NcZmtv2hKoHnqadoaM9rPE2GYv1eSH9WyBYaE4Mg8NLzwJwpYZqFk352aMt6ZdHJDE",
  "key14": "h4jGV1ExsVF8w4oKR96iZ2SSz6sZ9jeWwXfBgDnQsZpEaHo57yzTfLGRH6kPtmPsn8W3YDizwtDJgWHPYkh6xiZ",
  "key15": "4gxCRXTaoc1TW8yzA921KCRsaQGoSvdm9KVKa74KpKpdEzeCagiGkVTH7T5wo4gpfZE3gHuevX3vwRb5rkabSxwR",
  "key16": "5RtrH11wsPUF5XovyeAXiX1s6NxpTfhFM6QU35oVndg88V23z9ivQJJirByk5bJTwovaida8RtT8szbwqJ7unths",
  "key17": "56SQothC3aLyPTgahUMgW5pntQZijbXi6jB7XTzWMFKdrwMrhVuKLAnr4ikLV4CgrruqoSwkgkpVT3WxGsBrQfnC",
  "key18": "3U5P7yjLbrmpnr3GbsjwfXXF1StiMHJXfEAfRMpV4APBz198odEBMPFiLXPZHXApmu3x8XCMxQdHCpqGN2hx1LvB",
  "key19": "5o7HuQYgxUTF6xASFLkpX9gnupipUq2DtFcnrz2bNyX6HqpD9wPB3KpkbJBZk9HXNzvhgk3kbu97A8c7pctetSpZ",
  "key20": "2LMj1JEyFAvc7nUdVgEjkyPY7fA1yoiNqQDGo8Tq1UyvnVq8Q8KHMxV2EDcFkaELGrQMU84fCo77c59XbbTiG8kx",
  "key21": "k3nWfXL4QzrhAVVdKf3Q7YPZoJYTjWBah176PpR3AzvSXrqhT46aguCFwiozkEFDQpCfPMWy88qPt1UQukWdg2A",
  "key22": "y8LKtcLQ2f72hV1doda6cdJgYUCGQW3xyR1gPXYccy6H42xvfBhAztuJLvjihFwbGsinfDs6nBtmz5ypvAa4r7F",
  "key23": "4i1gfKsnFYW4ojefnwGUAFG5thR6UN53oUjUz9ia2CrSrNkHj5thTAnsLE7wZhJRaiuYeXxH31Xjxo41aFdPezqk",
  "key24": "5QsuALyM6dFbZqawRc6ChoB9KJtTKyS5oUjwCHBm6WZe4e4RmtNufo2FMgyPKWXJzna8G58VRP1nCrXVxtQSXtdc",
  "key25": "5xFntk56n3btUySTLChANhpk6W3SrbL5farta1TnwewaNPYhEZZXDaJGqvTDKJCiqFT4GbXs9taB33VmURhKzcpQ",
  "key26": "36hjMA3xUXhbjJE6JiLyivkFYMSdFrbD35Cif9WTpyQuRKzVkA5RaoPvWg2zPJ2vvgECwuVTKkZkfAZBWxRGyi99",
  "key27": "5z2ztqXKvvxc5RPdSDexAk8P7JKEUfqbCSoyArnZYn3RMfdqCjsaeTvUJCohheL9YCu9VocVcMitVFBW1XabL3Ht",
  "key28": "59jpixFAdXiikRj58iNYnGcV4P7vSJj6cyhsxkuWmSvptFbhHYmn2LDuTBoPD1i1ksoeawQYar2iLxmBqm6g3iNY",
  "key29": "3z67f7Cq8DcWAMQuWK8mPrhiaR27YKaU9zoqvFy5tDd8HUTyggpWK2JS4Hz95gkmmTnUGH4iGNt86TKM2znQ5SS9",
  "key30": "2eb9LpwoysijxcpBzECsqoviW1VSnBoBiv1du2aVhKCYXkcoW4M34WgrqiYSF8NQSRpchMPoxVd6NxCDyZfBR45e",
  "key31": "2z1YLGhHewR9r3epPL767SZvyiGq6GemN8wdEqQL4kwP1PkPht2JzchWH792XMiKo8sdgEtyhHs84TAv7aroRycP",
  "key32": "3fH8bStp7y3FfqYR9ChsWmyRXykuvMwPzQN3GfQgdgJ6RgHYeZTtChQ4MBmCC65EoYS8BccW4wo3n8S6zgA2S82Z",
  "key33": "4WKzrqin1UwxC1Duvs39WNxtWJb4ZBUm4Rpwcy4u3DadeBu2GVUccYnVQhCyh8dR74LTDTVbHViv9fDwMfN2428s",
  "key34": "3va3SNggrVXN4DFV1ACKSZ3TiCBYYGY866egtBvzCb65sKHyjp97LoYM5Fv9BVvDWKaoBN28vNoVSxXJwAhk4Uv",
  "key35": "5zpCM8x9Wtu6Ty6x3UKqUGnWBfQ4rVJhkPijCfs4fodp6BkeqzaqFSYEs5Cnhn6aKascyhBXAAEJ1nkGcrCYD8VV",
  "key36": "2M3UVFd4vMUz5a9DbBZxPDPSWBtyrnMKRi59gip8QVExiL1uxcsiDAdpKqaivT1gz2bgNS5vQJCcA1aeQts4AtTL",
  "key37": "2uKGdNoGAYdGo4zpieZqzV4qpr5GVx1D9VTgC99CBa5kiHn3uWbUoXFbWAvHhrGrAiCEY4jsEtexzxAETApCGt4t",
  "key38": "4rgwiMMzTtpYZ7Lypf1qUTfvhVcSHpcaXh89CPFhx3ZTp6x4PuswRBTxWPc1aaNh8y9HUWZaAbWyw7gf7aurFnTd",
  "key39": "R5MJBZyDPXH9u3TRKkgkZhHGDnuLWZ3U9B4tZH2mRDzkkMx1sPDQeo5Z19fxsLf96HD3YKUH3DJ66m25Eux2CGq"
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

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
    "3AKUEHhjDtcgHwig1ExAgAd3guweXX6egnLA2ZgYYe2CWqFkJR82GcKSxPCeFPPz2duK2kfZBZSwSeV9NbKq5qJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dFdGrX5T4xo6zgFdqkowaPWuwy2MQB51vXtAvyZNanduTmSFABy1zo35UtjzVZy8qD9pB6YaNdoK1VSSrZifpmD",
  "key1": "bvhoAk8DJwHFC9XneBejmybgD72wBjVkEEbVhVhu4zk9jXnAVPBfzpqvNVdEfkC5ZELt1fV8VsdKB8phxaRZJVU",
  "key2": "3hM3f76h33SzVmTCyN1BH25DGZBMTe1cxhuPKdEKfdDnt9vTeUdkr5NLMThzJkASi4RjysmUSRHKnur2GFGVYiGU",
  "key3": "4WaVcQxa3FKrYgvsSjy91HPFXWqHVSV8zdXNhuxBmvcqpecZcd6BLYSPwSmyRTrqmPry9Gez1wBXAnYEAQWxEBcj",
  "key4": "5LrnBxfR7gCG88xm1MRotgPAenaPYGaqXijhQhuPPoxwzXsXHszgP4yytYVF8yEzQQukXjNPqFR8abpUJvqzrhsy",
  "key5": "g9vS4ncR2b25gENgHK6KotZT23PJSudXErx8UN9ts53GwWxUtLbEqwt38K6z6SbEiJHdrmMXZRyTZUHczyFfNzG",
  "key6": "4aFSu1JsUWEbNPz3toxdSjXwvLqxtfEjMms9KLWWJGJWaNJiznDFmp94MhPZyvE1yVfaKeDFnPb4rKZMqq1LyrdZ",
  "key7": "4Fs5nVct27E6BYFAeLPDbzkYKDbQP6XEACovcTXFpvRszkDeznkAwdRfBKWj4GLY5dLE2o7QMpTecixwzuddkqX9",
  "key8": "29AaW9xV1XNuYHnq2s1A4JxUWmxyfSv7B46J8tBv6rrWhKiWBwnVmwDA1kZkpuFR5dw7unbAvLFCN4BW6fS224p4",
  "key9": "5KgkQm6zU9vJ6EYwWS4wVVsWzuMBwd6JBpzrHzb6cGJ6N2meZnpp6s7KAFVGBJ3BnMs5W7f8nq93Sn41cc3XincC",
  "key10": "5qr12SS4qg5NqHCpMvrTgt2JFrep2AktyMN5ZwRW9ozBmh7wnmgHRBUwuJmMMBrpoK9D7NAWJwBuyKbrRiRyDKgr",
  "key11": "3Yig5sGFGocbNvRULcgDUb4pXMPx1TZNNjyShsDEBdWeZHga4cYKURRA84ZXarwGfVhpGaUAjnzG7xSZSowh2wiA",
  "key12": "3M8UTTRuJjT24pVcXePpwgYD4rnhLeyKZ64DJmri6wWXAZhPsX8vBDbawgvk3vcnKcj7AXpgjPGbsfQ5UEZY7MXf",
  "key13": "2mHdNAxzcvVoxKbG9uWtsba1cQDy9TTmCcqeDSDUNGwuvyo7r8rPUn8af14fFZiP333w5QuQtgcbGRzcWvnVzKX8",
  "key14": "4QSVRcfo2akH4PEDHhFisNYt256wE9Vt6KGmR6cdR33J6E5uBsAYMmfcXqasTHmNBc2e4kpXDv5LFNYNRJQeNnAN",
  "key15": "4GAGeLiuxQYmUmb2m9cDmRdxfkCPn6ieYCPqQqTB92VDujjMqoL7zdwstFAPksfXaWvDepn2VWjZMB9X36AhS8AC",
  "key16": "66B2sejgndf1vpf2hgpMMYuQWGLB8aFVv2X35sMdQ6n1jrh5RiNeLyPmY7iLv2kfBMFq86xMDxbq4wBvfBNPx7Mx",
  "key17": "2nHgh6tbnANgJY3qGVqyTtnPDyQgjCGQgPYH3znfRHvDxfSakrPw1wZsxEZnrYZJ9oAoM4qbfdZzxgkUisfPc2tp",
  "key18": "44LHsBqG3YATGxb3aZcowhsk3VQRiqZ8GpgjJWFUR6LjpaZW1VYMsXHTMMcqr4wtm9CyWWij6Wy5TwptqHUyimjA",
  "key19": "3cGiP5T76yFNXPu1oY3a6obxnqHSQEQc6cNNaCt6H4wdVBi7xG8k2WUetAXJA7gDwegVd91Fk2GF1WAP4gqK2GZ1",
  "key20": "3eGAzS84NHKeMmHFLiUd1EPRUjeTz1UsvAAVoo2EmKeGmCR3RNpcvxDZWaVZyaXZ2AJqbUUpLQ4tRSrKxd1dVpRw",
  "key21": "5R2ZuzGTLsef9HryFXwK2dyHXQm8iwFQFPfbaRp2iuhvLCTETH8JN8hWqkgFr7Yh7cy6gpRep24hDWA7tFYGG2pP",
  "key22": "3nGdhqEVXkjUah8fmiF42CScXWU82yRpZC5FzBbebSPxxLK6NcnJqUi2kcA6sTLzGAbyZbeTGcTNJej9t3teQiGm",
  "key23": "3cE1Rr92E86zP4bLMzjBTDGq3KJ8UQsxU5fKXbt69RJNmTq7RwpyEYiH2TaU265yPjfPTwUncTygWBZqFV19kjt9",
  "key24": "3zhNVT2sDEtDEi4eC8ebUoZrK4EcqWxNYyh7ZbmPE7qo5b3FzntRqdaNd83Uj3FZhH7AwteDGAKd5LDh2ePfDcgJ",
  "key25": "35HSpyUPghZtAsQrc6RDsLckcq35cZo7w8ovCHuzrhuYrxUo3MAg3Yg9ceubap263YnHp1qhCjGeFwT7vqHxFhgn",
  "key26": "4KGREnhCyq1bpquuNXJgWJ5W6dbePBrJSmiy9v18huPyaeMEJtN1DxaB1JRkXwz4LAjGkgZqRYajurjJgb356Dhs",
  "key27": "56175qwThtrdckSHedmbihmSau2BZY8VHrnUJEMkWiU461U2cYAxB4dpGPphFsLNZSmkz7DVPxaVwNqBL2mNyWYn",
  "key28": "rDSZgSjHfasJgrx2sTxXJsyMMM4xxUTXQhNUeegvFXEtjYojYFTrKpDfufx3g3hc7MZbXypfGAh6jaVLnfnXdCV",
  "key29": "39cgCHeaJUnQhNDz9pAPXP98pc6TRfhjWRZB5Xj2C1KmGJZqabp29AjX36pMv7UTPrVsK9oehvbUaGGyAzngk1Mt",
  "key30": "5UXJkZFxp23Q7P6k8pVTYzdsS5hkZM7Tf9GjJF3h9Ju45HrDJsvVY34xrqeCLV83uijdqrCoWWGLMzyLwgxGnW6P",
  "key31": "2zRyiBypf31k9DjEFbvrwfEAp6FEho9xEod1gfFFLizK2mXteeUFfx9GfT8xC3vQNhLyBZcbq846iFWi7vqakuEZ",
  "key32": "2jGsjGkTdn5mPHwos29RVNAhXad7fpA5RdMTyjGH8EvXxqqBY96hDj1W6wQhr4eBULdeeq6vPQAEd1fo7N63WDPf",
  "key33": "4wifPdtFsDWrznEkydmJPUC5WVMX3ffrzRKNppQroB6b76zyyhqFNqnkhtiaHKSa9mdSswGxaZ2bnuM7xYveZDVx",
  "key34": "5dsESphAYkfPuewdwnC3HmYgY6RzQE3Ge9RcEMAauSBEeWARnES3T5qUTPuXou7ebB6eyE5naHbCziYVzr8KkymW",
  "key35": "52Vh6MkEoPkChaSwvRjB237vFubBsU2Uxn3LF52knbQmzqyo6pCNYbNPQK6afihxWwWAZjApjRjxzzrtBN2AvUmg",
  "key36": "3ddDXGaojGzvK812R9bn6BmZLFaf9fuG5wpTgXTFX9E2FNwZvSSWgFoUMoWL4GLs4ocEf6keVbxmm9av3dMh4V65",
  "key37": "521vznz1w8VPMwVQmhiBdLiWKVDZC2AJEB976Tp4cAJCwPahv7fHezfoi5nHGJkPmL8V1nrk6uv5RtqSkc5Tmcgo",
  "key38": "dZ2Gya5TLsCSAetaZe9v4ogmbc4Rk7FytoSN5pAU3ua1WEXLm4my5zJe5cEBuJH3ZmW9pMykg8k5o9h6brYZUEi",
  "key39": "cFMqjoYDCTthasGnmBbhCT9oc2Pcw8pGt2xgz8SHC9t8h7zYmVaPAcTCKrky5o71ac1x228NKiZiEEMfgZMBXH5",
  "key40": "2evUNYmYkatjEvrLE6cTvpZ75MDtkc4nbstPaCa3XrU15rxCxscDukCqenY74y5o27QS7W92xg1dc7pvazeRneE9",
  "key41": "xefTY8Bjio4duPCLxWe8KcTWSVdcCaxTx4a73p5ZC8Ho1ZYQCyDj3RKR6LBdCHhjHFV62FEXdzHxLSYyYgvuBmi",
  "key42": "eAvegGfS8iyi8okchTy45XZwykXRe4VLTDnVP5emK7zShruVXceKjr7Y2NWcmYfCFn3wQoPM2PcP8xRQyroMviw",
  "key43": "3qdfRgBwmEYuWrzXEE6Nhofzs8nF9jbuc7dfBoBCJeZmErc5wjkJrwVn1hMm2L9WNWgk4yHfytuyKnafy39tKEsd"
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

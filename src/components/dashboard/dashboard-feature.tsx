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
    "3sLFdFDhBpJtF4MU3brZLb97HpRLgTkyf1GuNq7Gy7G4kupoBye42cr8C3g7wrftfniC6MoSKZYoeAEcXPFw5kTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZhYirAPMftWUdxivFJAZW7HBurqUuaAUs5BHwmuVQABu9P2TYLRHEpKMCWYjEoa4g5Z2z2zYGxcjQgkqASuMLiZ",
  "key1": "5h91VghA6i3nZtQUm9YyZkwFcowr6SSBrLxzJ3vK68qE3x4RoVJewq2PXtiHYVBtPth4Q7x7vWc5Nra1Js9LcmRM",
  "key2": "3dBBTck2EmVuYkhHTe1rZNaZW8pXwTaEeiGtGTKoKGezwB62tAPHtn3YjV3TXAj295VfVeKuqhtJCdprmE2HjAf7",
  "key3": "5tzhhmEDSrbbVDjUp58v1vDKF9wmPasP7jAbt2MsYpSVmgspaJCrN4iQMFh1Wd47yh7neVtBeRe8jrgV1mKkGuV",
  "key4": "5XW4bGsFxsFW8NsykPuW7jBNQKxKukL2aQbH63j4dpgoneuHdnms2qFPAZb3pWdrMTv36bwEmPf6bTWGFZZ7Vibw",
  "key5": "3bzDtZevR5fwBreBNzRNN6p7FhvBte54qfWApM2jpSVBoS8SQB2fz6LVR1XUzsEn4D7uMDPQHporqBPrDXs84xDH",
  "key6": "23zfiqFi8eydoMJPfWKMSeZYtm8EzwYTbPwHKTHu536bZkeTjA8e818nBBfxunPAyxJ6ztmeC35K3QYrBtZQik1Q",
  "key7": "2msb3kf1Znmpo99DAxmpBZKmq3zTjW5pDC8rtGPTiDDuzpDCBYdWjhs59vMgcnYph6y4hRhagrm9r3iKsca5RZyp",
  "key8": "5Z4rWTSdxBN2oqKUz6M4BFBJRLxjFEaWU8Kc9vet6C8Hc1HZ7NDs5EYZf9dUxek4cn4DMhwK1SSGpqYQWQerZxtD",
  "key9": "2U3AXxpvsN47NRZjtcMfp8QAwcghqmgU8yWAcbbhNFmp8e9g1XGmXmVagEzLRJCD4SusCTSdTpzBNA7511qR2d2J",
  "key10": "5W1Ua9ka3RcR5jQ8mXKnknNU5GwxfG76Y5bUF2Cvh4LAKEGLrTvbRGnF52i2aMF2Vftpajwio8r3Mz2XFb4A3RTW",
  "key11": "4E8pKVj3YygkeSncnRDZDqM7R5hxzHTwPW5L7KWXWGgPcpuZ68v93LDShuX3Ty7cncCpjtAGmz3oYR5v4BBb8uvD",
  "key12": "4ckpqD281vnR16sVWHyZJGTj1Tnrwg6fWajJDXPR2dM9Kh3J7SuzTzKnfE64UduwSufbBN1uWd3aVXZUYJfZ9T8Q",
  "key13": "4cAwnR3QfLJTurL6FK25cj36fgntb1kkNbMuvHTqaKRM1giTZNzTctj4J6eig3sHJmhVNkNhzpSp7M5pMMuhTYVz",
  "key14": "3GGojZsXv856rc2suKRiDFDowUpsrgpRSjwi3gm3gVASDT7ZWzMjUdWPQtaTjPnqYo2piYRyFEQVHDWMcAaWTFGV",
  "key15": "2WBZ9vNRfybyzQ5zwLfVsjQWU8WJg7RoAGZkKCsBHmUhp8rAR4rcHQMjDnjLSL5r1x3YQjx7rdPMYYSbPLJ31qEx",
  "key16": "5uguZyadV8hGd2TEVfjfHfP5pAaWdqAzoaANUxaVFcv1EX3pupT9hi2Mo9xPez2DgppaihuYqVFXCnuGmtkWG5JD",
  "key17": "3v6Mqkay286jJKwDCbhTAknbDfXEcZcQHVG5aw4jCUJisVZeHW1XHxtzgfGP3uNcww1m1RAVH5RcYie42DcN7beH",
  "key18": "24YAbg2ZptR438tqBepdv9rLaVYRXzRNcmLdp1t7K1ZUf4Hn24YSfiRaCYL6ofYYmgLQmQGtSSGMs2isGdFmwosu",
  "key19": "3LNmp5ekqTb4b3ZHa6m7S4RVi2ddUpQ6vGEuTTBwfgxYeLowzk3CfgsrY7SuY9FjK4DsmWMgktotEsscDrSeRiz2",
  "key20": "3x8bDj3QFHdc8PDELdnZXTr1uYLN6jKmJ1GkoTvzDjzq4e6PKxgD7Q5HDkvboBRfVk6rZPhzj381VdZsUvJBobT5",
  "key21": "QzcXbNcn6Rf2jZfSR8pF6bFiYh4EjAyFkqrPp5M6ukGiYzTJNJYRVkbDwTz3wuiN73MHSwGBxw8RBZGQP1V6s7g",
  "key22": "4HtCNAfvhedFuXNntCDiCtgHiMVXmxVaVbTaeSREfPFGu9uDXUSGXvMpqdjGJKiDjrdM1Pxxd9eRki8RKcMUeNyG",
  "key23": "31FAYjuMcCsBZANVQUEgT8juBNtb2kjCMr4hNdD2NwwhiY7Meci3fEW9s7Z663Dq7EHyAVYBZsuegTu7bCWfBLyo",
  "key24": "2Ad9dMW6JWpAvpcVnARjapoHhj2XF9CWvW6wGFzjo87rs9HaMTiMLrUacDFWwAZgZKehfJN1qP6ZnVbk44zE1Gdb",
  "key25": "HuWvnm7NjYWxCsbZBNK8i8yDvMQ5KkBQjuWnDxVGexaLwuoEQgVSh195TcGyNtLg33S1XcFyMGnxf6awxmsNStQ",
  "key26": "23Y7gdzZX3h4Ezpx9vyf5Zw9qSc2Kzk6qk8ndEaPMnhUgUnGvHYZn4V1pjS19uSUAS8m2TMC559XmV1rz1B5EkeJ",
  "key27": "2PHN3kRS265bqAuDNSNekmU4zxZ4qNydXxq9uENT5AGyM9DpcdgsEtWFTtzbkvbCzZrHbJmDQuYKRzRyf1XC9apP",
  "key28": "LEAyW4QJtETgyKygbZFCzsEPfTHaRpS5rYiVo8V4b9ri3H5gMXHeBjohVbiX9RKXqL7uDEkYVoPoEXmmKE9LNTh",
  "key29": "21Z2PBjUvMb7nDLsxv38v2YrTRvnktMCemmsWzs7P9vkEvaTBPWHbMWyrNkVWng3Lq4nohzKwvwHuxLFAhviq3r6",
  "key30": "3NDjYDFJwcs9Ku8v39FpZxX4ixDBGFoGDTF9KFaVdA5oS8uMVJXj1uENJXdJf3zX3KZnG2LEL3Npc8gnbSgRA1k9",
  "key31": "3ewDjQkvRFcWpFx4GT1LVWzvX4dfzBWXwCuh3TR5MNhpcXEm4x428RoA6D9JfYY65sEJa3vPF7NkXAXQY2T911eD"
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

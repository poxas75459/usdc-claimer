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
    "cHbwLJBrpPyicyAf7oroRB6YVuh4iYvHfGsvzgFyyPGwb691CZD5MNiXdorVZpPkDduN2iCNKHzS3yRC3AwD3be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lk9BAhQXhFtKjjTs4kyEHaj4gahw9ChRhdXVjGUBubW5XZt5x1sKPYRPk2EuhA4mpHRYur2jtXhrCjusmAbLVMK",
  "key1": "4qSFrVQLj3yBwHwve5yMTup9juB7cVLsLrmEXmhYsjJtWpLCQpvRm1HkmJDELPmzxuuuPjXQHpgNjHbEyCB3Ac2k",
  "key2": "38nRaYezeohtbnBQCgc6Fg13u7Kk6j6mvW7kkAoGyNqfiFevS5hBpDy299ULQpPwwdG6qUx5oSHiyz6S7JBa3V21",
  "key3": "FqWZtm5UQjm2CqimyoUHVoyKZrg8Pqp18D3ZuFG7RDq8ggaE9hKegUD3B8NgYobcRTAvaby1Wt5k1n3AYzmeSmV",
  "key4": "2qYbumDr57AtBvfNwq6pQfZgsXTBxioTEHv1XETnvotHa5NbDHKyc6rNtYY2L2uFNWMjse3wTfC7pXsviB5svr4t",
  "key5": "3EcqMuy3GcDy7zsE4D4Ncsh51inqE7XMf4pVDVdqff24RzoT3qZkjCbmYmpDXXEpcSg69m4bCuymsnZkp9YQUGHF",
  "key6": "3kfTYZr81rEZG8NxRQfRSKA8M95mGkAPZyrsFB7t8kyzrGk3zRVtqSadwaAzhLbkwf8zswo3ug7iuQciA9926M2L",
  "key7": "4TsJbHr5HJmW38Sbc5fKYcp1xQjSE6psrMVKvgBUkhzKCGTroq2Yv18gCBuAiGCj4ZofH79cbZcAQyLqZgspU7JS",
  "key8": "Egq1EXZv5z2VCugxsUK5f7gG68iBwaudzSeE8mKpJEiM2Cz8GzmHTuzyeNUqKN92tWkXkCdAbVoHDNue28JrL2i",
  "key9": "5sktn8kXkzF4Gk1SSuFb65yoGLiswtmRgMMnBsCKMV6DhA8qAZfJkiQZPzGupttF8KNcnGLY1qyKhxHMoUv766EK",
  "key10": "2aRnbu5TZJw5jJz3DE2DN8bQk4t3kLH35UvaVcPDxJey9RcoEzVZgU3UYBriCHyQgb6EFP6YWKDy49MgUpakgYwn",
  "key11": "3V45n2g5WfibK1HenUpN2F7rLiWRidUeQQ57Dy9d994XhtChSaZFKFGTEChFuUy9B3ZMt2oRoCWrGx3Ytgy9oSvd",
  "key12": "8Cv1emwXaDXFeiPoZFFt4HegTewyYF7Xd8ZXSJ1NqwyKPMJnzcCeSSoFjy8ujwVsyTwvZUfM8YZ73bF3MWJ6gHG",
  "key13": "3FNz8z5vxYmkM6sU3RWTnTUaUayTpqtkLGjiDXKWKvt5DLG8Bb6mhy9u36GjtZLuUWecinGqHTPmfVEnP2Y5WwGj",
  "key14": "2aZELTqvyP99XHy4AS3VMQ99bnz89rf6C8EYyzsKDxPzoin9bpRfGqu4Rdp5RtDHujNP8aMzxTbf255XSnimGiZv",
  "key15": "YozBauJDcvWyBbS76CGEXcxs59vxnmapKJNytNkRcssE2Lr1yYuEjVn6giQ71qXem4qBT8ySmFAMR7tqMJEvuhN",
  "key16": "BriKUS1wM9U5KByiaWM22ARH3BbULhfbGZqwzB6cdsQzj7jkYTxMrgAbRG5SGVpD2LRwHgZaBX941tzJ3VKK84H",
  "key17": "2t8oDfQE81ofUuZEpR6XshsxfGm7YKLPgDiQkov5xtfHbLKfszocVSFxXFHexnQcvxAMkQcqRj9i5s7nwFgkbNUr",
  "key18": "MuepRdxbEvFA3PH3YHNCmYRpF4o58pUBnLa5DTAgnsZQfYxg89MnzBZnViop6NfPWAqQgxWm3LEhhAQyy8rYPo6",
  "key19": "366yLRehxhdFTo8jgu5R5ZDeVzVpxSPUknxBirCp42Y8GCdJzUZBnyQcdChFZnZaAKSxMxBRL9fqr6Q1aBnBStbS",
  "key20": "3mUi3vgNW8AKv35RpeoHDSZw1vermC6jgwqEbX5nDy5U4s8ZxKAwUTR7CpxMXJSppPaTUe5BLy2o3VPW9MWCYK2Q",
  "key21": "5mJiq9BdFi2pDn5zZbP8JDLCnLc3AvUrzyCBehyNaG1Zf6RXewAqAjiYKJC1Qgraxo6rryrW7ZDnzz63KMJL3Eor",
  "key22": "2oe9sTVnUa1UTcuqgmrCFTyVEumaf1E9n3SKsR8aUwnnUp8L3Ccu6VY9YDS2BLSxsam6vLsiY6FHcBR8WcPVVcQj",
  "key23": "33RJBbLKQ4edLD9UrJ8vmSJ92hajn3S6TquMaEHdTqrZTjAL8VjSD8qP8GL9kkewMPqJuGXwinzmKFCsjsgsUq3G",
  "key24": "5DaJZLWZf9vUJmF7ViB87WojhHjHW2cSH8bcadWjdApXXq8di8EQV4LgjGjUnCtWYsNKNe17D5mkaSUwxE1Lh9Jg",
  "key25": "n3yfEqiYYYiqNLBx3dUQqE7muts4cuCrJSEwHwfwicqZN77qVhqAXsmmc7eghRW9X7mjriVcymH5butg9eUWhZ5",
  "key26": "PH8ZW2fju7C1txG71ztiCrjY8sr5WYaGrYZ2TRm9AfdEhi3M8HAT7jWhKhfymGUgTh5kBc4VgzS1NkxCwpXmuab",
  "key27": "3mCPnoUsbW3DxdTz18WyDdnciswFrmizKzpQTMHQuJ4p73EBBi29H8Zt141tV2j9MzD4dH3jKSyR21KntSw27USu",
  "key28": "3cf4Ac9uxvK8jDiJPCwsbhizukPx2GPk2UdF8m3ScU7G3bXipWmGZaivpjvuuMHVXTujJqq5HRpWQWu7QycZSjkV",
  "key29": "5Dr1QbxgxFe7AWGfkRNra6GBKPHfvDhRnvougvZNeArym5zLrwzhsxhnwHiaRdaE98TPqzu9HviJ7WHf7ixRbvxH",
  "key30": "4mWPQkcANaQA5K3x348PiqZNUeYvW1pd6xbJsyHSemSs4aBsK27n476tLpPj8v9euTaLgu53rjXWHH3hNQRisTK1",
  "key31": "3zVZwHN7wQKEjmjUsng9747LfDjkCyWKdetXXQJCEYYkGj7H7iG4Awjm3X1E9JQggazfYVxCscEfoWCCivPKTzus",
  "key32": "3zf9XHLpiShZBc5PDUYXacahVatG782Cdfeg6uqV7cDPQeBkkxdJk3Z6Q78bSAYSuLBdftQyKYHPq9kCWjkpN22m",
  "key33": "2xhFxBWVdMsZxtB6DQV15MMB2FMhfCB23F6FXRZuWpCyMomhjPGoXJ2VNwT7QxnEd53HdMqCCXv3MxaEQvAXq47J",
  "key34": "34NKEUzQPun85wM6DejU13GhZFTLCe4EwcWTfKPLYcQSEza25o1jntJusPBiFU2s73Qm7Npv52Bg9fML636wuLA",
  "key35": "S5L81s8RfSgUgeB7SfMQATBn2fTAuhpSBijk7RFiBTzsY8hd5HhHN7FCM1J6ZcUuxUjSdYLVamiX7Rxy1m13zVA",
  "key36": "562oQRHr4jbLpLyTMLAgjkbzuHKGKKMR5zeWTQFxGTGa7jzkaGCFbkEFZWgSYrBWXLvWS7TzLwkggqb31MUwGRYk"
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

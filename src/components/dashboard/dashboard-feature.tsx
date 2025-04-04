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
    "2Rf4vUAzenk3tg9QgFzV7ud3zA39GHq5e3PpmbH5EE8UgDjb2uLVqZ6P3Q2bSm6Kcwd3njaXSDFjQf5BtHxhtj5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C8RYPkUT6mxgSP8JuZQBBcznNnuFLC36QcCtZnqryX2MNUSzG55WuEKxh1YN7gXqJazC6SnnsH8BakW3PLAPRXH",
  "key1": "2Vy9sCNZoo6MuwsrmfVgJRm79iSz2CwuNpsF7Z2dyB5wFSh2MdopMN3wWHPnt7dbP9o1jJqcFj6s1kXwEHLjB9mr",
  "key2": "PdQZEdvCmD236PygdmvvwHh6WCaLDSVSGWXCxZ2M417BazdrbBmYzJhmCTcyg3zpVfDUGJcTC9wjUhAeewKQKBF",
  "key3": "4k3moh1DLBGtzgkTbJyW4bQe3MNpT5ycmm5MaT5rJCKyu5QxSFfGiLUfXzDgvFWoKuRPdv6SPsGJUi5XugeoHB9c",
  "key4": "fsFa3GBjRqo2vRnqRDSTMQr1AQLCZHeE4fn12KhUiN8PhbJrv5iXcXQ8dU7T1hTH6HeKmT5yy5cL9PkiDCzj5yY",
  "key5": "1NQKS5zkP3YaUU4k8USQ8mqS48w38zoVeeDPEoDWcskReQ5Tvmpgaaf3c1nPr144YbPYsHM8DtUitNVFH5SUvsL",
  "key6": "4Zj54S85PvLKut8oPhznnGRqPA2aay4ks18QtsGv8QoTXrZ3QrzAArEsfChoewJWMp6RfspK2FRZxgPNAGj1xMJA",
  "key7": "4Z1MstEHzqx4TjGjjGwUpYw7c2Gtf54TJrPXH5KNyAwocWmu8AJtsBbadpEj1PXbTbpTc2ugNEjYJuMtKCoA23LK",
  "key8": "cBeAMHMityewgkuPNmKdJbeQahM3HAxMozaHPp8mRbi2azgjpYU56mPpUbyLzwWzeFuSSSErFj6mkwMbNkmiVT3",
  "key9": "Tnfs8GVwgj2VXzqvtCMWxetpvKQMgBRn6pBsb7oSbz2MZ3Pt9yQUpn79pGeWFS7Wz5oP6U8bDJvJzj9NwKQ2CEF",
  "key10": "46R6hcb4w6ZAA36pGfVM6cyfnJC5AHq8ZSLWQnCS1DZcN6HxfyXYd4EMftGeLsHFFt3RjPmS7heDmErgjNRnP3QJ",
  "key11": "4q8GWs5J2yWiSQXRYawwxX4FvCXxCiA5VZrGovJCKg2vPymaQurS9nv1J6ME9KERJYgbdaC4JsGuHxrJ4HCFDfBV",
  "key12": "CorNSgDda2nXaKA3pmsopW7dBvcBUdKkZZynXuTB9rtBzEkFAbku43dKwtb77cgtNpukvgyhftsMzZccTRGxBGA",
  "key13": "4MJewtiZrGfEB57NsB9M2fRjuwhjyXWhAofA7vkeayuL8orj8xQv9bQ5sRr2K3invrd4KLMFL4Z3iGgGFjYjZgcF",
  "key14": "AbqJo9ssPqNaoJCVdVYxC3aVSdXpvm4xohKT9yfYarVXVrcMvoEzpQPf8ifwSFmS4j6bZYAqjUGuJYvyaA14zK3",
  "key15": "25GXLMtLdbMZbtm26fbgro4GRmHfRLRtG1LTU3uXKV1Ctr376ebHTzNmJTmNtjc8G81wjFDDLWKPdPU4P35Ro3EJ",
  "key16": "39fq6an7Nt93fdcxDXeWm3NzAQHuz4wpypUsYoeBAPk2CPDdrW2ZV2yMMBKLseogyxNZemFz6PEyqM7yJ9GHZAdC",
  "key17": "5eKH2wo5AtRLeia5DHY2uStHrSHr3kapRaNxYXa4ejdeGLiWTftMNLJSAEtnkoLeFbcSGMp9FphhaWLJFW2WQEqZ",
  "key18": "4y5QwPkJ1WWQwGd5664QAG4gVPJBGkRQemUYKUbNMo7L6dGYCFk5sFpabgbgHkC8crQbRLtho6wv8RQ7xAmEG5bc",
  "key19": "3RJpSBLEXBd9bDeu4xv6ZnEooEMHSDygnEkcPqJLJgSPDgvGbyKKT5G2oQZTJbXUCEjSiNCzDk3aFCN4Z6N3t3pR",
  "key20": "57PAVmLmqmYpnN3fWiGP4Kz1V16W3AU2233rVDRjgLbjnYnY3jrzQ7q3QqSvzjtsM4wx34zpxHEHHHN8HDuKX7Ww",
  "key21": "67jtZNXfWbeFwYbSA7y9EnR75MkT3LPqFmTt1iCm8v4dpM2Ek52sV9X8GEi77FGUbKrRxXtiyttwuhz2rKsPDXg5",
  "key22": "2Nstg8RrKGGkNVLBT4gcbDhwPdsr36zwFqLPewuiUXUbFFkZ493Tunhk7aF56PU72yshBad9hksQk3YHuSUruA8g",
  "key23": "4aMdj8mux4SexQ5r7s1SkjtqBUnc7MZogsbEMykemEY9JB7rE5ZC78cm6aUNFGG94Wk8qk3cU6BjD2HphzzdZTxw",
  "key24": "5oFEJR6Ff5dywYqSZF1QGGp8wxoLDAn3SW1QTXNvmiCSCsviDYXsKQkk61k2tD1vhSKnsHfPAsji8KHRJkLaYwZv",
  "key25": "RbCYcqLyPrMMQpEnt2xvGhx7CK1tKiNAFqkgjuCjmmroH4sWrgKVwDLUgXJJcT9AYRJsn4mkYuspLGa3GMCZADs",
  "key26": "3W4WzUaqAakvkDDn8GYTst5iar5rsuZfco9K8JaxeqQdiBPU6SUwzzZtvVCnbxPtwzuSWMowTk2E5cGKncJ7iopX",
  "key27": "5BfeAyJPGfgBHKDUHwGQixSifUEcFU5rQAB4m1ScgA57com1t7H1YKQhWraGLUqm1MWFXaAtArbet4E7QS3X1WFC",
  "key28": "RqumNBxJsR31HJhz568ouwf7Sx6PSSPJrqKmDurPTQYpB9zLmpt4QjiiPxH58hzC8zQBwqApktG1oxX7xZxBQFp",
  "key29": "3jq44L9uXrkwb1TL2hyxdt2jf7gNXvpwXxkVNHZCxAz3JRuad34wP363mg4SEn5EYmssU5q66wxBVpTmwshyfkDU",
  "key30": "2KbvSvrPDREaXcKWnBvA8KtVosXyHnGxPYra3S8LdKmbe9XtkhSMYFZvYUV1MC3biR7yLYA2jJayM3FDKPA6bCLk",
  "key31": "35k16Zn65chF436ojxJTD48N3qUk3wFddYaZG7RFk9VV9x9F7QN1wK7dBZw33cU6W541Z8NqjeQNdSx3TirWSS73"
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

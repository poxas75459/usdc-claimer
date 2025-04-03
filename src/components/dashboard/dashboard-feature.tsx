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
    "vhchw4t1DRiigjJU2ppPo2W66uWbfHJU1td39WjSaFmfBbH4PYYjCkGvRhwNQdqBw9HLSKxzSCpASZ7Ai5k92rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3mTvP57FjdFpzFw9PHVMPjQCvLJ43vAkbU9yk8bmNXXcSEXwb38ooGWfoTCy5ZeNWi2js7o3qxcCxaRKUBX9hJ",
  "key1": "2hpHhzi1RLh2BXt26ZaKzG7vdU3iS8fm8diRynJrgyj3XLFTyqse3fCCjvVDVJsAmHwxkaUJ7MsnZhWF4May83SE",
  "key2": "3xfqam7ggGz5jwSAGwjnpZtL38bQzaAoxBPnywXAjWtcMwtWa2sPGLQcTyeEGLJmHQ5raec9YwSTnHAwLR6e5AtJ",
  "key3": "52U9waXmgGojbRGpfEXdjSGfZJMxVR9crNWEki3P2uTnyoebJoLeJghTbcvx5g7iXVEqdgAQtqWiNmYGNni9cv29",
  "key4": "3KXiV6h6wZVrb1Nx28c2XmDR7SGnxEg3eKsu3CvjUiVBJFNTp2HEyj7TSowrs69NNjiqMLy76MQ6f9Nx4yXtV2gN",
  "key5": "3si3WkQ6tyf6xjjD9DxrV7JdTQyt3V6ix5jaB8AWTqS4iF7sLaU2DgsJQaKPGQjXJRbmEeFv7L1sorCgw8HzTekb",
  "key6": "34894XFktbD18ifoPUppd8fkf5vRWhX6MrkCvzwEKZjGYggEgHDj1ozyjF3XdG5H4hgZLoodWwxsmREuVWFAa5rU",
  "key7": "2KqyEXqjqpfUFHjrG1iKiCFEgx7yZe2UgUkDB52SsMKkCaijQVX6RwiRi9L36jseUT77kbmRsQsnsnvoqkcngrTw",
  "key8": "2ASQJznbPYbsaiJkMGK5oyXjaqT4wNo5hAqUU2zL4J9ro57efuBySJW1HfttsF47f4SWW8ANBzG7JCLeHi6ffpDW",
  "key9": "JkUAYp2inLsyq8wzoB5AQ3hrcuMtFzSCmpxf5xozU1MEtM8oStLNTt1BXZYnJ2PBS5gjhx6ApB8jo17DRME1HXn",
  "key10": "DDbfLJJQLJqKaTJxgPkKUYSjYGQSvbHxsLWaqoPfb4TMvUAjCaTgfH2HHmPgjzwRaJdzfxVfYRzYmWRh1G3ga5G",
  "key11": "5EuUk4RTQcCsFE4N5A1sJXTHtTSANLBgXq4EThdGr7oMAUtM1jvwKW8xUcNBhwRf3PMAN83Z2A9rM1T2GTeqoAGf",
  "key12": "4AVGQfSRfFmq4rpW4mjxbPy5spaGUeGpqxM38jCWXeqBeAmUsiDCSaXwPM9UVruehqV9LLM6srejhbfcpDEyhrgk",
  "key13": "2pZqE5RpcfGWKSXEvY6ZGzPMbdtFrxHtFd66RnbiWwibW7EmAXwU9KKkVfz9xs4m2YtAvg8S4jQMsKwpJ5i6FLtS",
  "key14": "3zPqUexY4duQNC592bFRj9RBAou9gBnJQmkjWrYu84R7ehS2qFXTyXkb4ou7TEgaFiMGUPyk4UK1523XGpZ9rLAw",
  "key15": "64jWjEEBCDbsinoHRNdozNP31tv4hZSjTB2qDz1ME6qHCW2gzzLsBggdqE7WRCRnvYjvZuHCZ5rwEV7ZButGJtV6",
  "key16": "2GNvxi8rzhWzqekJo3cV2tSC1L7LfXjY5EgGNMJ6NDxDfQqaQyySqiJt7vPuQ73zjK3ZfMjKgVh4AmoJ3TSfDYeX",
  "key17": "5GydqZBCbX44zaHZqe9kJDU3YBRHdLMfU7cBShLL5fZrT84gktRBLHosR96j31Sh4nFvLpdMR3NCX6QkFMxYimo4",
  "key18": "3TCeo7M4annzbeosPTNGjuTGPA21KYGFKTbjGDJNjQYcbDzo94qTwX18AEKzL8XtdaPor4Xq5mpLm4Cb6XzUhu5e",
  "key19": "61VgS5XDHs6KVhqEMgVc7wqiz9iNNbq8WVyfY6XPbanRAYvTK72JEcEn5B9oVM9X9aX5YDFa3VWJR3DL8aAQ3yXg",
  "key20": "4fdvacLEuY7cKX3fNukLHVAfwJgbubnZaXBYtzq1WyST2QzndvnWbT6A5R1uAshE5hzQT95Y1tsNmPBVBpk73jvb",
  "key21": "46usPXLu1mmwPkjwDWHk3qrWSYdNndWX62ftsJbbWemGrv3ZKrV4ehnJTMGgBCL9XsLW4xAGoJ471rmwd1SvdChM",
  "key22": "4Qfi4xE1NSdFtosekU2ezZJ1LbvVdPitiLW2vWxatNzNy5WCHjKHW8yC3mHAhQNeNZ2uwJieV9wNzF7jiFYXKMGw",
  "key23": "5Kdo3dXi2B4bDERYio26QUmxR82hNeFqoa59nUScMWSg84EqzGeVTkwzw8idm6Ri722hHFRTbTSedaACFvQ3VRrS",
  "key24": "2Pk1ip4Pt5Kj9jPTFfhUfDVqUtxw7RkMGsQQVgHmbAS1t9ftpDnrQVE51keS7D8gNmoSudx8DZFLLDTDyym3iEke",
  "key25": "mMWTFpFZTKNFkAJXBQLRP3zEBFi4jUx5qBCW8zHjdkR2Bs5hM7e5CKm6H66CzPJkBzptLf1k7bXrgsmdWoQ1r6i",
  "key26": "34cZvEyrTrcomzL426xRixvWrpCV9nVh5vSpBkvpAr9J7g1pnGk7NPk72DypdVTwiDEzbdTkjp6uhHzWqJ5SRtFQ",
  "key27": "5NkYHBS1mjeoERbLo5pngUQHsw9rJXqWLZwkdqdiw6ci7Q42sdE7jS3HUoo2eBTv6ZixZjGdQ5TWLBjN1PNUaajq",
  "key28": "618N4gkWayqK6g8bmwtDJ1FfzLy9enAXvRag47mZHZiunSXxfsm8rVSeuCGkouaizdHKgT3e9Q5FpycXaRViC5p1",
  "key29": "psoxET2fAm67Z3LpkndbDBUyQA6nv24BV6ByE3pUTQpueWhKcbtELoJaDzT9GoTFT8SFixp64KUJ2iHYtK1DwSw",
  "key30": "24ifs2uFgNbE7Toi8t5N8Q6jE72ZMiJewdXURJ755koma87RuKMho6AuxtU7SRBCwXwtTY5ZenNjvJk8E4VjRdxU",
  "key31": "2gU8qH4Baft2h9WgUaBxBNc374fj8DJ5rPK4ZY9eQqyfBbaarchPtpHbhgSzkNxaKyP6a8Yro8ejjqsBZ7wg6Ehu",
  "key32": "Vp3q9BHhKmfHNpvqvw8Za9cMWahbGT2tXdmQPrjxX9ETK4QQuWFNHrz7CsiK7eFN2ZQsfRr49z6vStReCC2grcy",
  "key33": "4sUyX6mn4U7QWuuZhsHgRNCFxtjCuL5QmSNiAtTUQq9k4cm8E1LHrwn8dEokAySk2JSmevRZjddVVJsazXWFuugk",
  "key34": "38sNn1b3sFtdTVBPnwE7fnYbnXWtTuCzEBxFUwEVzwnXWivQ89y8cQhhZWbbygwKADyj8TS4Hk7HZm2V34PN8eqA",
  "key35": "5tDPpAsw3GLiqZpbdeqJeqzw2rRiLp9XuCwbdmCBPKdufVtwU7BAXSWQAJbYSHPuHwazkuWxEZjTFTctpMjtEqMS",
  "key36": "662KhEhTfRG3reFXjzBhdLDEBPmbd69KUZT6utGTxrehhZsJYbbD4HvwDgyPu7bjJ86EGxujhhtv9iFjqFkEjGgB",
  "key37": "64fPob4egEGmk1pDReaVyo9bxicd37oV49wPEST1v9V1tZGbLfuL4pqZH2nVECXtBWauKfdRxpJfXGPXJYSqQ6kX",
  "key38": "VvoxzZhrn2p6rP3cUdNts8RC5VK7Zzgappr6eGSkyjpqLuFcvSmAfJo3ed6grRbXqKyVa462YEeS3M1X8DoKYw3",
  "key39": "36JSSVZJaEaoJxJDi6yEQig2mcDY3b7ojQo9sUNnqtkm622Cic4h9qvMARBXuwLoqUGDvmD4QZ9yMifLs2MtoyJs",
  "key40": "2f1fbbYpoLpw9DWktzuTHyB51cmphQSB2xvEJ8nQRpVP5xEvxekz8GaDBMuKCCNjXXEpsQ8NjxCZP42AXVtdwtN3",
  "key41": "UD69zXfbZJrYDwCtC3n5JiySKPvi4bu7yHqxVZGA9UtctgktSMFMMRorH8DHmMF5jWTQgTaGngvEJdkgf5h1gwH",
  "key42": "41DUgKTwRLJBerEERVKKpNjF1wnMoNahm1p4CTeyQzRRgVwuoGFVG3cvna79cREeA6gVjiUudwCbyxagjz7RUmos",
  "key43": "31PRjRHtzupyw9wLsszgy4aSjbzYoP9dQDvThpcaNGYFaHRiNhzNfByok4FPfVc5FvuNKhZkzRMMymoLYC42doiJ",
  "key44": "3VrmmEdhpPMN2gS87iSyRqAZ8G9Av7AGgZFffjGwwoUSqzgHgT4UA75dvTJYX1dsTazHLqKFsVqrHxiAFyHGQmss",
  "key45": "iLmh3yjHsuqRnh2xRkLQw7jT6WLWj4fwrtA2QsrsUKBxWw2dRqWc9N84yEme1nX3bpWFkXq598eXTwNrDEio9yc",
  "key46": "3phwAtY8GyPTDfToaNqrojxgfJdFRzcaRtVYKC1PuRkgL5G33SmMi87ewy4eVxuKHwiAmB36tq8e4FkpYk2NMpah",
  "key47": "4dz6AVY59A52HEwPpS9GRUnj77V1foPyX7WskxsgZSHPwx5YeZJSiUWBE4ay5578xP2MqQAddTUvDynFUXrdzdvB",
  "key48": "5TMc68zkEZ4qhpwSG7pC6Z1jVuWDnTiWgM43PYC8Lm9vjKHpWg4Ya5T2sP8aZvatB59CpUi9MDp5LCxGHziVVasy"
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

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
    "3BcNLQVSHZCH12ssNqzJHokGa6YE7NEPXMoWaaiGtkLjaKAUUvf7N3o2zujDz17xWrCNVGvaW4yMbDbenmqBBenK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PdmDkQwtBZq7V5YirPigx6MsK7khHjEpeVJBw4HpkRePDNVKDsbNVnmRRECpeDVPYZb4UixJzpNGwkgHW6Ktrnv",
  "key1": "4VkArwCRFBm18vxfxVhrLZCXTMLvSDeHdm43ENQPFsVkFtCKMChLtGNcKvrC3Xzr91ZtTofwg2QE4MwuVRjAK1xk",
  "key2": "3oYqHqUAZfdxoKFfbToKVYxHiTHgSDKdD7Y6yPsNjLbVuZP93YwCXjySuxPffK6Rr3uZA7eYsCce4NN6sCsozsP9",
  "key3": "25jU9c4dZgrLTF2GbmRPABurVCCt2gHRTcJ2dxnYvCBQn1Nn45PXTHtiwfS99TkRNFwx9y853UacVVjE73EkrC4A",
  "key4": "bi71UM84CpCudMH9P5WeaeoXcZr6L9bRE69fTEbAuvUa3QYA3t8PJVdugghiPwY3z4K6KTnbsGKGV67zBV69NLK",
  "key5": "2yZxii6q7CUbbqoX3DskyXVUmYK6tTea4HvsU6iXn4rJoMtzo9e5Mu1uVFsmfiwaT535toMTEarecGWD5G98W372",
  "key6": "5gxsWWWJYkfpo8nduD1EKUCWD7nwtcq7v7HR6DQCdgoBabu77aTTVYbU1Ay8stwQ8p5LK9wSw67kQ32Rb34Fi8Yi",
  "key7": "23rV4sCBkTcU8G8cY7JeoiyhdivPDsLhFhjifPBwR6zw7BcmboBvCvECv7TZFiT6ytaSHAkSknVZJRsiL7nBrLFe",
  "key8": "3uETHm8WyE3k7pcNHD87m49x6eeshBk3epRKcKZxXKZJgPArWHQfDbjEm7ndJhjs1eBbn9PYZKp21LJjsUTLjwiJ",
  "key9": "5e5HFsTYKy7cVTh1MJyZHq1NCExQvTaSwCWtwHC8wRv4hBMDpU9eLryU6gZPj9ziX488nVfpVvAJrrbFfY4ksnrs",
  "key10": "3dFhpkTmbsQ5XbxZaic5RYR5AsMRamKkkiUSCpibaAjkyRG8QYaz9BTZVukN3pBhozgoE6jShcvBWLMgoQDYPwgv",
  "key11": "7adcsa6Mvz7V5De4zU2Xy7fSZejpbt1MQtaLKekkiWtseaQRAZHppbM6YhvWbDDPEE4TPqg9bLc6M5xj8RTgXqN",
  "key12": "2sUQnZ8biEgovQi7dARomkap1GRJDzbSZce7iTPqPFjdPGY9t2kP9NXbvN4RUoGxE2nXxCX4UUZw1C2wFksND4Zb",
  "key13": "5zNtZQCunLtnxrHJ9o9dMDzXrwkN7odWBuQof5Q76voFRtNog8HRNTW1nDeEaVJE2tVsKk75YjetykuzUSHS1J1v",
  "key14": "2Fjgk9k2bvvMwtxSauwfg7Wh57m78FR1ADgKXVgDa7Cnzu6g3zcYF2TSSWnUr4CkXmRpBk4AyRpyyYGLP1H3EXAJ",
  "key15": "5wvf1QgN67sUqNqhju9s68JzAssYUTtc749Ys7v6r5nER8Krxb7JNkRBMekkrhtBL6vKKdqPzuvXgqe8hn1iUc1s",
  "key16": "2iP6bBQ6GPgmhphQM4t88QejsZ1FejT22ftH12QAGvXDY2gkqbNAdrQ1fXMiBbbHCduA3s2mnpimynY3cJQ8YFsT",
  "key17": "4W2fA2ziTqjK7MwojsNfriW2tWKNhHJ8FFbgy9BQoUKQMfhXS4DxDKD8ksq1ZMFuBQJDNPZRrGa6pikiw6D3aFtD",
  "key18": "1vjgUbuAxZeo2tysYrMFQuE1E6MAvTkiiT4NjNMrkhtVdki8WXWG5EADiHp2hXReDv94FgWvPmSkHBYrdDTQEAm",
  "key19": "5tHCE6P2gjALg8dXuQiovmhUuDidsg4U6Ef9dkUEovZzyDCf2FtvxAGfQroyVftjP4mW9UN7WVYofvJfZfz66n3i",
  "key20": "5AggAiCzXtSpSsDSPcskSqD9AtewVVCnZHzC3uYFDq28N6up38vVsqs4V63aPZcuZAjqubzxWxQWTJ2MFu8nop5e",
  "key21": "5fUbW9FseGwQFBD6gvuDXmFDTMzD5e6BhMpMVbMk5gyrekeZBtZq6C1upKHV4FfxPNZgfDA7UPzQ3aYhYewPWwXC",
  "key22": "4TRNhF8smsuBed47H214aZ6TbYCqm8Yasz95MJE6J3kuL4kanKZGzC2vzgRCpWqcfXnsa8ZvcsxQzfuGzFJL3RUe",
  "key23": "565R1NDbwnNbVJgimMmhAJd5TdaqYHCtZqNkXW25VjUvZB5d8i3HhabBaupAr7TyaX1Qi3KJHUAPwk1ooMVAxeWs",
  "key24": "4intityaW8Tq4A72kgBbp9Pu1DnKNEzH1hrg3Cr6zGzivfnXyasNV4Z7oVm3QrNZ2fjEmXAVaWH5PKH33K8CV6Ms",
  "key25": "4RJ4rJKVSTgQN49f4tkmQwMLrfo9mEAiKi2X8NhfrpxAsADZKzUytJ3WPTUtnTAzRPJdjmdDGYQtjPSH9t1cEpnx",
  "key26": "4rxFF3PsTS63Up3HysTBy7fUdjsoRrzkTmAu2kbsbpVmDozk7iHwKRVtGct8JcresBjxvzqPQYyHnhCNBE8RZRVt",
  "key27": "3UyY65wbmGKj3iathgzRsVehE9i3EZsnFS7ufZRwwez8dYQKdn4aQzgRHQiJ6LUaskrRaCmfFW9Q2dVjHzoDbien",
  "key28": "63uUfAufBd7d4hk8wfkfo4LMCrkyP4M5uYTZCDhVDE8yLuf9Y87rVXqZfm2wbSa5ZDYfPXgmPiygQ87GtG1zYL9f",
  "key29": "45tYVetho1Dp6CZJAi7KXsQVRXRhRqPxubHh4uKzdoDVzK9L325y4o88NYYSf5qSYvCLjYnVJH8ASXyvaAtMoBGa"
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

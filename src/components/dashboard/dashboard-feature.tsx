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
    "mgoMMbPNWfndeFyGtpH9DkVk6aopNktzdKDkddZwW2jwCxw7f1uPdVNUj4rEd7agHyH6MGbvFtKpnC7hrNVuvBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HqdyrXczBMf9KUYaqQ9vmJkX1m9bNyBQ9XrkTQmHwvQypbYrsifp3UUU6fQJA6xyBXh1hzMZ9MdXXipt98WMqH8",
  "key1": "3rKU33xuLfkw8RX1rtFdbBd8FESuHNTVSKvNZyfuGyS1A5HUgSjYrGoadqReAHcLvNGkvruYFP3SwSyEzXKXZuQK",
  "key2": "5WNQhyCDoRYvhPyZX5hWavJT82sb3iHgkBKfKecqodsLXU7czi9jatwJzfeRsK8QWBqPzb8zydeRGp8RgV6z41uw",
  "key3": "4LyHiM2AWhbGDxhjqt7ee2GwfpWhD513WLFd3kFvXxvmEUANzKzzkC2yCgxxKgrpScWNoRhACTHWJmqzZokdvQtd",
  "key4": "2ZDA3P9bUxTKVXVrRt3BHshGx43omwTdE3rKsNNr5HHVwEGA9GvbZGKt8UJ2PGzL1LHyinQo7wAVmk8UyiMq14c6",
  "key5": "5bwSHfSVnHKG52a6JkMftMa6Spv29siuzz8SiY39buv8XqpPeJqj19L2REXHt1wxCg6FgcH6d2iumnwVX779sqz4",
  "key6": "5jQj3ytkZyGhSRAvDN1Q3VU4nnU1zLDuhTDcYNufrUDQ7TARp8ShuSUV7M77y1XoxFmg2vbrTbydXyTZVT2pMSb7",
  "key7": "DpNzG5pWjpxCFvJtBGeTRNdxSRxbyn41XSAQK8y89ppsm4LKZnCa6V52RNmUnbSD1E9Z8oXi1EVvcTSFMjM74Qe",
  "key8": "2UKTHiVChWqTFYuAMdjgycgweKH2Epn4GQ7afWacgS4osuVL2WYJ84b54JLvxq2wLKjTkZprKyna65qHhX3j9eJ6",
  "key9": "56QN6QKtpr7HuMWBxtpG3NZLDM2RvLS16TU7Yn9fJfbx9BA3AjSyp3E3PYRatpHdWyAUTfBSYNAM2YbgJPTqJ9Em",
  "key10": "5NRXYkCbG8NFpnf2KhTtjMvNxJuBBudF6KDEPYVrjaADWGvEpUQaKAjtFvbPFLPn3LMkrZSE7dmFeoU4krganEH2",
  "key11": "3fbuABESy8c7zB9EfXvZnXC9jZAdjdiYcHeF1uWCXKGn2teztgmcv82jM3USFRbXLWVfxisAKNyH3wVcY91MppTS",
  "key12": "5HrrqdKX2VJnBBTeuEMTqpB41bUi65uR7F8QBHn3y4Qcm9YxfiULAsGrWHBLU8qCkY6C8nYv31wkAUT19PqthT4A",
  "key13": "9y2Ss7TJ1pvE7N9dNMuXC3EU7PhwKsNF8dib1DotkMDfaJfNDLVnvcLTbB5TVmxmcQnNkAXMo4q9mcB6Tmcn5k9",
  "key14": "44V9eUqBd9nLKwdjYJUSaq9vxd87tD8pLYxbBaz1o8B7YyeT4JfN1pdCJCRmmnjw48JqP2VbJuXmcmFmBukJJC6e",
  "key15": "3C6xaT4Zyb12Ua67pd6CVndt1e3g3e6oPoTMmv2XRdYQb9HT7jTC2THWm2qzkZ2L2vaRYYTw6WLEgoQ6ddcPZk8W",
  "key16": "3cvukKKPeS9fgpUEfeVPb8qYh8YFrjjGN1MeP4Fn6geXDb5JLykugLqLkBMHQQBBz5TT6dhKyjrFzd6ceM6gwoia",
  "key17": "3MDcX4oXX2Y8vHY4eafumMamXkHLJ8YaK38B17PeuLKZR1frcjkgykmTkZ75Cop11XiiYcT5dUHfv3j1GSdjVbHn",
  "key18": "66dEHcyHG2ocXVjkrMCpyTMWYDPAT51A85ivwXk1AcaPwVe6bUtoFchf71422Py2SvLf138nmBXUvTahhQMCzrC",
  "key19": "FciofuPfyTbzBMs4TS9LEH1ftL59sWZVtoyJHUBtKLakc1osuZkMbQfdMX67NwSthevvg1oLknjpe78kXY289rt",
  "key20": "3f3KnNFUTVXbWtPrek1Jp7ZS4JDu86oZvfaekDL5KKbZNg4tU6WDHhsBH9JhtvkEn1dSejcWD6SNV3RhGRBF7MyE",
  "key21": "3uSDta9zxZNPQXsR4rkgu8bkSBU8sb8Kq4NUjzaP1vR9ZxaevUAzfooLBM8fGqA9joPYiPiWGqKh4Ds1qB9eeNzN",
  "key22": "55BeCiX7KX53C2dCPFfUonjYdK8BAr5JF6nFnmeRjoY5WqeJisZArr5EUxQB6NGrAC1WHpwyStc1CPk7tKo33aJb",
  "key23": "3TsBuXUqP6PSfYJr51ASBEwnZv6kdSd693DggUnSCWZSKByHSxP3giuqkGvSR2VtSToVy7mfhengkbSTdqmJvSkU",
  "key24": "2E5XJ9MT33ggC4aQoGhZDGXTT6cMPSkEnYTDtJ61mBpsvoEgQVCbpNzCBdAN4rqJU9nt3XcMsP4mYxRbpkAtZfwx",
  "key25": "5oJd1Lq9g9J2TPZKfxG4YVR2kxXhXiDsvZeAvovfA7Hg8eQSS2vaiNkvUZLxnzcCGHGatVhyqUCA2MnFhHwrdKRg",
  "key26": "3csvmMmbjb3HUjM6GK5K1Ko63HaaokzZpnmTVp8An7kCe8a7ohU1xpzCoyE2CMo6RBZFtJibFMKtCeUkDpCPG47i",
  "key27": "4oKSqgE6EKvQpb2xTnyGgW9TBpkgsQHPbSVoPUMNs3PWteuGKz7N1QYy9fMBA68XR9yLN2QcDnkxZxs9yqZSjyXg",
  "key28": "46aqHJtLVMj1nMwUZhhcFmuQajoT8uHnTqU9xpN3TMgngTojkrPtJ5jEr95LacUH8jNkBwPB4H47CKZvG1mYGiwa",
  "key29": "4Xefs4jvhxrCT7ZKw33vZiHzYEaKAnoTR4wV4Zh3YQAT6F4qgXkP8y4zPZuwMZ6qqcXQYHJBNwEHcudCKNJhGinm",
  "key30": "N5YGj6z1N8v4raCAF8jKeob577p97XokKzNxzEHDxdYe8Vf2spms9YJqKerNDqrT197oPsi82EK4oor7HGbkMRJ",
  "key31": "2NpsfVsuLt7yShSRnyf53iVZGdGdkcQk3oXovBsoyQL7zmoRmS5CajLQm2cXGUGpen8fLTzcp7Q4GqTC9RrCRn8T",
  "key32": "nP2oLVDAeaEz5Ab9Bt8gFDts6DqpTNYdbSJVy77eo2oGk5w45fRi6h3DjAZVJztqA2xSaQcThvRde21x1v3FqjF",
  "key33": "2wRZVuDbvj6m8oXQ29bRYgWtnx84At5KKEqcmNLJPopKEtAS9uwW8jcg77jwkMULeAq4F1GU75Z1GDjX9U26p35i",
  "key34": "339TcFArBdyEoVeuCZQU2AmsE6N8KSBXVxbGSiubayfho8FqX6MnE89rzv6S9ermbdpSiyHp8L1emSGJ7AZVR9w9",
  "key35": "4YwFUz5AVzSG2usD28ZUifKUqR8NfCuArPaJNyEEVNEiGTt6sguPawz9kXDTUwj9GvYcAKVW3kq3xw8mDUoUEys6",
  "key36": "7DAqCNm4us6Do3E9NSWdWhKF9X172ZTm43JqHFQ2nN5N8foLGna9xs5LkNMo9Hm2FBfaDuE7ovtSLW9E1gs4j1H",
  "key37": "2zCobQduKLnu6PzruUmxN1WZJ21xqRVXXXbu37ZDZw7nH2XVo9vy5C6hodkRG93PvoEp5biTjcZ6FtYkT42eASz3",
  "key38": "zcejjsEciMo5xj575Y8tvieVfdM6Uz5o9Hg4533Sk9hXjfAfkFz6PZDv51gbsRoSXqbuE6yPhLNtgKtteEfBbNu",
  "key39": "4gznMhEagjgoWxkjnRDJ3jDGVMHjrB1ESfVex64YmTHLWKqEkv4zMzm415YZP4MvNUA8BifkNg94oPZsWg6bHpHH",
  "key40": "2CM3BDxfHrj7fGVLFGQWePzDhctieCpe2AhRZWyAaswvSBo6fXUQ2rB9x2tEECGTviJ3SyNRaSpdxFZ6hB6Ni77D",
  "key41": "4YDsBgcfxBP2fYahdBBJwbmPdYYgmMCF8RNvBQnbcjw8QdVFk2LM5Lz6MNDZhcDVxuooY6uq4a2qbdsduuBWi7W5",
  "key42": "2CvkwHbTUcLfnAPpGLZwnM5B2ze4oSKr6hMU84v7n7XTdKDcycu44tCeKiC3dFwWnedsZqux5PsAycA6bK3FG1uQ",
  "key43": "tqFmzyWF9j1WdxecdqUaS7rjJ4WQNfiuaonNkucsHK5m2Snvr3VxkTrVeUUhAqbsqkrLXTcuZ5cYiCVtibVkYph",
  "key44": "4iRaPXYF2QhwpK3fKzWrkDnnXYkN9zQ7hVL1BtiqffM69den5fBvaprFG1wyP9gB7tCeEBJRFDR2WHzd6Hh6ZqoX",
  "key45": "KGLNtwFnKU857ziV2xKKypWXbdCVEGxx9PtNh7qEsmL4VQcENEaJdKN7KTeHz8HkR63DuSMZW7HwidCRas761et",
  "key46": "552R8JXToA2aEQ2uPpgrVFvwrwwqU2sTKsgT5CC5YhSwkibJsas1hHHJTZU6RhPLYyTM2uEKvKA1X8zyF3hHBymE"
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

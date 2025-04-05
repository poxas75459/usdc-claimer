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
    "4qStuMpSLffxC2TQ1tmctWZYm5wQeFeihWFDP4NqZgVeCGmBnLSxizCSm1H5zESMqKDvCL2YmzUc6soPRyVgD65w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DcVUbEFrvCR241rWvrx2yrUuwSfAP6Vqf4rRpMcngfiCrc89GiekWj9bmG8eNWqkEbCtegFTzvQWYefFxq7d93o",
  "key1": "4aGRoUcZXZbLSWeXPMkeDRPUY8ihEYurNG8p9bda9VitcMqacQPMCih69Mpa2oAsGF8Bj3BmHZRwQa8SGeS1ippo",
  "key2": "2vEVKxtARvFaTRCebYGeMWftF8fxEiJDWKciRNKJQwHbAgCJD4dEWK5wSPE1VsHUgKQr3ysgLE9uBUkGxNrbP5cq",
  "key3": "4PX3sAr2mNh2EZKz9DaW7ehuCVxhcPGFdhC7gyNyBwVc1sXtFmsykhX87YyXT79iuBA6dzhZtBmvH8cQMTSuTchb",
  "key4": "3uYRd9Rzg42oQtmTbbQR3dHoNPvBfH6J9QCJcSNHVTXsDNpJHbK4ye2ecx1EhmY5aJ1KCNbbpGxGXvJXwhN9P4AQ",
  "key5": "2MndVFtfKmDJB2GYtJPxhLvojrbYrVY9VQTqeb76ZpWXB41fC6qujj4Qx7eLEDbfz2SuVuow6Unke4GVMuSmA6hr",
  "key6": "2Bdra9S1a8Dti1WBXhkE4181rv5PPsHe6PLEdDQV1Jwa29Gg3f15NYqBp49YfrvrRJP7sFRGo6spwoXcPGJLybUN",
  "key7": "5UyQd7V13Xtf5seQjEN7DZgkDKYnjqK67Mh2xaJ9auWGXB2d6YxVK9yoeiFH8VuRoKFj9USoZpKJFtZsVib2nLoK",
  "key8": "4rTqL3mFx4CTDNHHeMLkfGJyxx2N2Lgv58rhhGuLZZMEni8Nv3rTTgeSpmbV3QZ2dKhaA9RgbpJ4rznyx2PCe3WQ",
  "key9": "49UWZzPL5bJqdu4qpae6BvuQjP66HMPTzJne5iepskdvupRJJj4w5YyYRExkaqR3HVjhkkAmHjQsa5xz9zBqD4L5",
  "key10": "cjsPqLurgxCNQYLrw71qFGpBqYzUhfm4RQvF3ho8EDkhGrG2JRsYXicBTTZ7xu1vdtGsNULbPjAw4xpdhpVT4iE",
  "key11": "51gRg2fJgBAggTdJ3B46de74TiVsC1xFxP14T7MTZcvkCDuDguADn4m8YMto88gXmrgGVP24Dqm8xnNN5MzraczT",
  "key12": "2PHgD8tx5N4Bg6cmfEajq16WoVFpSVdiHvcb1KwkrLomhGCppgfyGCP36sSCbxUFEfoByS3upNQjVY6mj5daQA3R",
  "key13": "5R8NrQqETMUoUKSnVQwEk2fD3EHMXYD7F4QJqWjK3ZanxeEg599geoxg1u1MAi6VTZSquRm5LPoNpnsdsPmEQw9G",
  "key14": "4dx1cu19gQ5wv8mH93cbzui2pNJJowbTrNddFuAnPH7ErYgC2Fmrpbo9hjqwNCg4iyV3BnLB3KFCoaWFpipbzDq5",
  "key15": "2W11bXxTztbBfXBFk2pNFy8n8EMpdx7r25ranbjB7xaXZJyVwjrqTQH2J999NhsJNPSkJx1Qfsfnhx6fAVFMLq6G",
  "key16": "3ZsYbXwj7eHC1swzgbLvJPyDQPNoV8ioSptV3GR7aCacEKtdnTrfgjmUCBsPeFFPfKUThU7eLqQfAyetcADKS2cC",
  "key17": "8ziBvfz16rkRwi2koKJoexjo3ekYQMc2c5Z4CmK5ThgGo3hgGxcrJe4MBUMwRQVxQJC7GToni172HJwy1Fp8gcd",
  "key18": "32MFMivHLmuscPzyJq2L2AQjJo22143MAZqLYe3hrf31SxQrH3MiNzgTTDLAzbv9Efh5UsPfY4vTHNqmQuf8S3wu",
  "key19": "2F19dxSK72oQHX4JtVerqCEuDuMdwVg4akhv6RmoctFaw7bf7eGwPvtF1y254LfEfwcXi7ZojxfSLqWJcERu5UAn",
  "key20": "3EtVnEHaXCHjWS1sWQMYKgquG9muFiAh8rXTvkybFuJon6WognDgbLfJRNh1C3q7cHkn1sojoYqyVvWQHbLYDfGY",
  "key21": "2FQWjnRzQQxhGGEoGxvgGWAHToPuoMgs4WxU3BQYFYHyaqZbgS15nGhGPERjadGVCeyXMV1teUV2obrVuiowKub5",
  "key22": "5Ru8z61ggb9jqUDZC1EFwZcVCLW3kSh4TKDxeXyzJFFvfuCk1UuswgXc8shHxaPFZBKtm1P8xAZW2hSbdVpdpTMk",
  "key23": "4jJYqtKqgqS6vsyQxX3BjMVQdBTk42J7Tsowr9LixBv59E3PgWqDnkoNLTaEGJsrFhzhEcx9xqvuiB2i4S16PXZ4",
  "key24": "5CV2f22QJBHBebX4Mf722BdMh4D3dFqx7SSRhoE6gia3BhjvuVQYPbxkQkwQya68tzre5nsr29cdyneNWexBHb9b",
  "key25": "57LQZYHZsherK6zWZgzMs7vLtQ4BcDkLaeGFKPpVgA81yMgMbikyAhBKxQih8i5Fv6Tik96RH88br8LPALnFCgxv",
  "key26": "4Cu9brAuoEwSkzmuyBGFZ2SieL3DS4YuSBeSWFtQkduXphc7rd7tmWm4csLDUjMMAjRiYzwCQBht61GTjDKi8U1p",
  "key27": "2J71CUKQdftV5T1t7CQJAh3EyuAQt8BQCDxH7g5aFyxrUm2feh6DxfNjLDHRG4JSPNDrr6XFUBbGwpfNgiRqpTcd",
  "key28": "2tdFR1YH43dNLCuqiqzMhT3aJUNQn9uySF2fzvuF1LYrtTqYYM7qDWKukXjd9hVV4SHBo1kCdUgxWaQBS2gn6RPU",
  "key29": "4GLKAwVbBNgopJ8sFGp4CWYABQKci4t5Myink3KLamDdTWeLeZPB9TjuT7y4V2L2TdvFxWmCZVYJ8fug3TV1AS3o"
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

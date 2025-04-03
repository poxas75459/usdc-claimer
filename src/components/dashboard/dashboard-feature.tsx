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
    "2XVDw672BNBQCYJoo5HuhD2xTBnhbCSoFRzaAe3vnietFHcHiZmdZ53jbnFUjTtwzFKefCZ46m2LTHTuC2jFUJqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VYT8NHdmd42VEz71pQuZZsSiibFjN8YxvNDizV6JR2DNpFQ47wnPVh8zkoe5mhVNJrDQAbMZf1UVZQWtUdXhB1v",
  "key1": "8jkieWcBmrgRq6h125Ju4NduF2exKGsHfWGejhQrPhBsaaETiSrH3E66Q99cU72JzZB1kk6JmFjyA5CqmjZbnsP",
  "key2": "4qDZhxAFsJPBa2WwJW8tgQhiNP8gARo7rAE1Mt4ynsScrHPTSJxMZAzU1MRkzQoL7tPKRPhfeX6t6vqBSrZ3u67Y",
  "key3": "4NVrUE4bCC33xth2H5YbPCoUREeEEJjbF5o2VV5BfNBRaqQQa9ua94igW7WmczwzoXRDapv1KhP2WGammgqP7JCp",
  "key4": "3neYjgTJ1zZZ8iwrvbEXYzzo5m6beZ6Vcv4KBxro1WJwq1b3sR2ahDuNqTYHmjkeTXJVmQRCyTDZwzj1mRmcufAe",
  "key5": "3GNSoaU9QX5NxdgAMVpmDbqPNRCPaYdw2fSMrtacPbSLyew9CUTss7Lh75rRnj1FPsaox8Zfmfvjs3tc2BQBXiVF",
  "key6": "2ETeNgkt7mXMBaYJptZA8NkFe7JBc4Sq6tzYQZXf4CFRVcR6GJAmEujzxPAyNdRLbVLHjXQu95SBMWznDzmcNaw9",
  "key7": "4x1eQ6EUgyjTJu9GHQbCtb6snHHyYcafLEdhBW68xSnL2Yr18QmLHHF5REQc7HfsskqTk2j2PtzNofrsfUxGb4Do",
  "key8": "4p7Ln3NxNrM85QdgLqQ7cnDHZrgAcaxEXh88PiUXrmSs3DR68VDGqt4vBUfkKnhVTdsHhmgkqayfahvaffDg3ABH",
  "key9": "33UyoqSsJDmZgn4oLip8AWpsDGeiZQ3VPuzeyxfozCwXSKQkeQzd5NZHqGAr8sfxGuwb7j7eRPXhpmkZyDakfzh7",
  "key10": "2PkooDsfumAfDPqHjQAtt3udbjkxxLwx9qTxFqa24bcEWMonddkV6p3gaX9GNDJ8RUUpPrNxC4uMoTw87QwLxhk8",
  "key11": "5pix1p36e1K7XKXVhgwsMxd4Si99p4kSWMeNZuqTb1wtnYB9ysQJp7pSpcamAy4WzoFGpBTtW8V23Uue4UnMwCHS",
  "key12": "4ryRwZgquZkGtEA4F3qJir9xtT6AsjFzaVufBDj2Hix5ANoyPEUWwvMKQDdPrLibGFQmb91NTUPXyKAbiynEhAUg",
  "key13": "3T3XKe5k1aFV22Yrzt1rLtcq3ZrmcaUf69kxGYDqCizk1z8QskiruNScyJE7AgqEqxknPZXFqm59fybR4W2nzaVn",
  "key14": "2EBWzhNSTgDb1WrHUtKcdz5J7DeeSgoM3tzUrdDZmd9MsxLX3UCMPNPKmgHmTMMBFHDaxh682CS5FNR4TNHQPW9H",
  "key15": "csYtvdydi6rGRJq44AJ2GkrUx1NzRpDkAkhPLgcUdhBNs7xwCYVuLupD4phNWWS1HvPZHDTrwJMrikADSWoAA98",
  "key16": "3K23KwuVVufr6ChdqMWgk4Ad3SMWqXEeanKEFbdUKmKFZc18ac3K2R6D43ssELGBXkSCHGBu7qmxpP8fr3knpfUM",
  "key17": "4Br7HXtFeL6H3yZPhsZoSRqd3tQcBhphXBTUp2bhqMwjDKfy2VJ8Vt3VJMSbHYMHsD8BcaE3yxHiUmF9jg6hTAqS",
  "key18": "5KVoX4Wn6NfJJXp3LXbDnpsVeVP4NDd4UeJLU4tTvSCtvkEFi4sDJQSbUPzAjJ9mBBLvECmrPhZRkUvndrvBq5Eq",
  "key19": "3nS6pGcPNZkoBnHNR7TzumCG1Awa5DQP8K66GrAC5RUJWoxJkxyHFKevEtnKiQ3TvsQrw2zvwu3DaVJsisEgduD2",
  "key20": "9435XJdWU6UgvXdg2uVnPYd3CuZu84UcC3keKf26M1MsDAUw683zPAF63rxvvMJqxosEy1mmLHMMzcghddLoSNp",
  "key21": "BqZ9LMKqk412PVUurZNTPfhvs1CfiUj1pR6HoHqFhojZ3zeVBm9wTzc5ju5LJpU46AdPCfLhsuXzXLawZxDxaM4",
  "key22": "2CrYEwbjgrKsfM8iogMN8G3ft3ib7gmbHVjTMxQ6NAT5hVNee4dohCTh6GNMyBdD8Zq14Jy9fmRmGL78iWZbzMNb",
  "key23": "62XVB11TVnnreMToK19wsxP9oPeP8UoxZD3LXaJsttHfd89K2mm3qDkeh4HkEZcDWDLD5aAsH9nvCsbKzyqyo8y4",
  "key24": "5S1mogqq229LhKsVDqCnUd6jhAiVLzqXGme6meZmEYb4j9SV7ti2cFvy3gtvHq5JruZWesLVZSesRvBBCppGn4us",
  "key25": "MgwCJFMT5zfLvqYYUboJdn8BU6XK1zMx4WA731QB8E4a1gVrVMHLPKqxkdY8TXiFrdRMjKsCpMr2cALXo4yFqKB"
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

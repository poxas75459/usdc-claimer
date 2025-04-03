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
    "4WwETUmEJUQ2SqiC9CA27M7CoGmsNsDk2UihtzChxkpSnSwPHNhuyu6jJi2q7bR8wh9W3XPfRKVnyMuENesoUZWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wySrrEiH4EsLhMTkPCw6ex4CrCfBr5MVkCkPsw7W76Fva33fQGgrNY5RkPv7Gni5jYdE3dcXwU4jmmiBx9wpWBS",
  "key1": "4Wcu4CPifu4J11tf3LJ78vqofz8ZQbb8caauEd5rRk45EGs1v62oyb2zu6EnfHezK6cEnGTZvcsCfhvh5ohiKxLD",
  "key2": "2tTgCzgaw6y5e2HVfPDomcpuq9NEwgskaGkWrrHXB6UtQsgEPPCJ2AzSq4fV7KiRL4DQSWYHxPaecjdY7qFcXMv8",
  "key3": "49kZfBr9qwn6VxDoDt9ttKjfdN3f6cog2atmGw283wxaMWSrcDZEQLY61kWaLoENU8j43Uu6HYFt6uAd8HsMg1jY",
  "key4": "2aWxBuuXQTYvxKfcqCj8wjssku5vgD66nbvFf1CEov83bgvNwSxXFQcD8isTc35DwaN3XWNt3Mto2eimy4dywtrU",
  "key5": "4YMTbZMxh52CRSmCJwL1yP4g1GWMzmvEBaATCYqCFzr9S6KjgEYzmpscwmqP9UvmHHjGYstvMgm62CbPM9H8FLgd",
  "key6": "3ZH3ZHs8QfBmqVYYJLjVMADPeNcJK5ojqrZC8itMu92PnTDAqduXLLjX8Rh1ht4tdKPn3unhfKNy1H2PH68mgf2E",
  "key7": "USBV9gZQYeshFYQc2zNoBLTYYgKepAZALRhUtRBSxZTbPfVKRRz8ZsdYd5EqUohpJPVTPpEf4sa9xSeBKySNj1U",
  "key8": "M8YFA9QtNnxPM8yKdMqeCK4GgWySuQTzn4D641FEH3iYDyoJnSPbdyXe4aSLKQKw68VbtsNTJ6Mgij6qZq3jUhH",
  "key9": "3xUYGVCobEYBAEC5jGW255Aw9ruQZHywEk4XmWC8BMjE6tTSiFhk1hMPnE8ucdYCqPSZAxdTC6iof1nfHnVYAySH",
  "key10": "3iB4pagCCdxXgSozgXp6H3vt9HwNLvK3DVVE5Pt26eSTHGoJpFun4k2fob6r4v1LKgQpDMCMvndWfdxotSwNg2ge",
  "key11": "385tfneKiHvBBsWpATDeCNyNnQbG2tQ9YGhbrpQo5dwxJCbD64azNocmkSrn2xWAbWanSNdeLqLb6zAzkLWxTd75",
  "key12": "3sgRCXwvc8JypPXsHQ2sSGbCYg5NwVkPz7fRCsFBqPjvurF5tEdP9YBEZE8jTraWewPENesD2Lm36uuoJoRfTFLv",
  "key13": "dE7Nw9UhApRuvx6v1QG41ELQE9scbCJXSKq97dGkuqLS3CC6YqCajqPbCFW6HbxLXGayzqv7j1ocSPnv4KBduHj",
  "key14": "4fhkFXgWU7r843DciSyzas5uFGag7J9tgz5MwhHD3WXx5hLVt6ATUD3Bu7od1KFaqo59no5nLK2ftPFvDnGJRLZz",
  "key15": "2pN4gpm4HBCyvJFSDDQs3zJEeeWHDCGegEYxWERdnYWd8ogVcsrfaRd2bXwNxYiPkUwarJ63Gs3DwsJ69gVGL4sa",
  "key16": "4wsptk2P6BrLuXL5oS2sjf5Rb55NouULa2G3d3xhPDDdVrF7mM7FXDWbZD57ZkiXwqCEUTGWBErSKHdMmQKZWLPK",
  "key17": "4zctakDjjkJEyMY6B7rqb2tcCcwvzLd18oXUTvhFQfiEFiZqxgPGePeAPRMAJf2zNv3kZsEYwLxiz6cMJ1oYJVRU",
  "key18": "3xC7Lcv723eK2ynSoCXRxwMUGM1RWfWgcWXVBmiNmpu1CBCS91LLANXsPkq7kPB19nLxFpPZY5Za55Cu5mfdXfxQ",
  "key19": "3AiEhQebFyt3X3TLxpuDLLG9m8FTCuGi4vpZzGucteovHubnr9yJ9WPe8rz3yzwfhb1SjkPaYVpv5fTd5ppTrBei",
  "key20": "2BN3Q7H3s6pZ2QoySkjrEaMkedphX7651EbrSui9gkn4ppRJKrcXXJ96DYYaaU34WAsjrJ7BJWPHanF9R6XcQ3Jp",
  "key21": "3v3yWKU3i9uFZyi8NYcgQY5rKW1zcibyuT6vn5K2tJk189GZpZ3f66EGRFeLhyzQzEs3NHpnZBFDDfQNbPYP77Q2",
  "key22": "25S7Gj1RyaAEVtdXaQShVRhPEiKGj7dPAkseV9yrj22K4uzmRYTqcLLHHDSorTrLTDydrW8rDiEvWE4QVLLHmx2C",
  "key23": "4H2CJsmh3kJ9h1Ajix24Eio7urV3txB1dqtDr7VcM2tMFoEp78LJxJboWDSWQdkxKS34hr8xRjaCrYRVY3v4mmwH",
  "key24": "3T7XP34UtSokHN2ZW2RPv4qbXnJ3Epdwr49TxYKZaetrji5Jcdwo3p1V5axYsxGV24fq2e9SCYDGMnXERULX8xsF",
  "key25": "4qxZEqTw42ypSEEdLdmjNpZfsqXHWxiHixmtbvzUwAREmGqLMi6gLGGt3r9m7H1hrg8nHVcpNhFEghEnQnCUJXmL",
  "key26": "5G35PpqC3KrMYkKBsqnNfF4zCaL6AUMfzDag3oabrd7dts6wf1Rb7vqCWbs6hukpGsDxJpLCVByBKEZgsmrD6tAQ",
  "key27": "EzSUamTGqBDzkhgomoeEFjTKUuVPQ9hvydffBBi5unLt4Qw9uEG3Padrfy98ZPxrsYSQ4CqdYAmxbKUDCgsKuxE",
  "key28": "4cVo9VJVM9HKMZeTrdSTF2n6G1anZGAaizQBEHZ1yNdSPKyJw3grfq3JKu1rSSCGVJjsR3WcDDvXREP22XiF22P2",
  "key29": "2hgfDF73L3SaYYvrgkCK9WqPKEkbvZHLtWaNGhm2rnbkuEgtjK3p3vjTVmrdYd72hG6g7BdAJSRJTUXHKhFiFacG",
  "key30": "5XRvxcA54WqQbvnuo2gYVuFTLaBvcTvwobRns4fqbAn7WHdo6AKpfKgjVRfdEt831nc6waKUSP4QAdkxFvaJU9SC"
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

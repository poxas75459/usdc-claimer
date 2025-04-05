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
    "2t78osXTRNvYkJgDjR9MxtCEhhfnokLEnR6qv7mobtdfXYkLDNMhGNSzabzUXhJz5MTDNay66TcYSzJhy8jEcjjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvsM25iAavC7pWRmW4EMYZQtVegyhLftt1u2QZ3Y7uYZbwearjbRMEszvR1LuxmpnMSPSpFVZkpYTTbwKaSGEb7",
  "key1": "KfSfGGLRzD7M7kBipW1SeH2g4YPvRHaPvbhmrq2yWbd8WrR2kcBS895XK6m6dvrUAr1sxLnHRE9uvy8qWSgDv1x",
  "key2": "5ACGiJfaMVqj1zo63YUe8BM2u2iXBVUf2NMZAYL9X59CRx3Nv7SfvxVdK5HfW9NnNeZ2rSDoVWcRBH1XWRpmAaUn",
  "key3": "4z4TvMgekDWwcfCLifwHZs3zEBU5yjp52tCbAZzncXbKJKXBhVLym1w6XptrD23a6iAzDtSiQxLEMphDBFftwd37",
  "key4": "54YdnR8BH6Z8ZHS8NcvL4wg7NCnaisKfjijHLAnKaEjWJ5tSavjYKYKvZ8xWFTLMmiLzDpxTyJabfMqbf1Bsaait",
  "key5": "PL5U3dkZhU5xEJwJLUhK9gyXEMrBR8tGqHhEWKq3zQ6qUM7pccB5SR5SRBUEYJgDfYVQBMVj3HXfphtbRBTSp22",
  "key6": "3m7UZQWUmru5aXCx75FUG7xXug1vjjrD7Hx9KbmttsKj3mgwAeYdtST9turjXGP2skqNMaYbxA2heaEHmgDeKQkx",
  "key7": "2zwA6fkKXHfirGezx565UjCMza3hVKcH1PuvmTzw5SBSq7mkatnHzqufHcFcapgvcpZk5EYSEnRjuRWQEAVFybdr",
  "key8": "48MseEEjHcjBg8ZY6X5zqrL3nSqb8GZTXoVXwv8Quyq166n3fSsej6f5h4SCkq7BDTUCNu88B21YLYeX3zCxNmer",
  "key9": "LoQhh9tknEPWYHzLPfgTtWU98mu8nz1nx35Q627H6pczQDmRFnqy2PwAkZHyA8JEcSZ6C9RMNoYWo87NK5CEi4t",
  "key10": "2G1ecFKzr3unLZBa5FhCvdz57eyhNneCWe1mSAKP2QBNXiiFZFjSQUDggtZtjSnbxHEWQWLDom23tP9QYZNxS1Bc",
  "key11": "422dFdGsXktk4tx68rGRJKwBBx4r5A1cATUYuJa1s3J4A7Gy7fNvTmkRsufkSHPuVnuLMhfgxVABA5tZAqoiZnpu",
  "key12": "51Xk8vzvNXoE73iirTbuQAmQLw5eZGw17Q8WDbHCUaComCPkbTjgSMVC6tpPvmwsJ2xKGvHc6ajJ1pnpnkJyuB2K",
  "key13": "5o4U8JA5nFwtfn1H2tNSB99XjSUCBizfv5F9wrB5gyBbdiR1ZFb8XRCT95Dv2HEJpB2dbPpQFvyPbWZBrev9KQAw",
  "key14": "3xcMtr16kS1ZeiqVEENsqaAYKcarKA4geQkQPQTgmtniHJr8mRwTXZaSrFdFx4A6XZAqd4qCLAFYD9Kktr4YCGmj",
  "key15": "5DakJsUZbRq54MypTfyzjJcc57cNsZBfaESWM2S9GGaFRzEuS1QQCjp91LSc6DnCxJk6vwReFr9ySfPPXYFaySdG",
  "key16": "2kRDo7JDvcunBzkrK4SBm9BSRFUcts9nZUvUvgASzmDfW5VCgnFAHudnX9p67B4xrjDZP365NFpKP872CE3coKpE",
  "key17": "wEVtVeW9S8A9Z42nD38zSvGgG71RMJKYSjDxsmrmrPVEBJYuDPhFSj1HVyXfSiLxgMP275kkYKbpZBjME4fB1vN",
  "key18": "27vgwvck2Y38BmJGZbeUo2PkXsLwmX8P2sAjzS1W47vUnKcYYCBaycoGH3DpjM7unGpCeUBZhgHumcuqdx29NzVM",
  "key19": "2C9172vubMER3b9u5RBHHByyfvYpVgoFPvQJxQBmGPS4WcsBuraf8RLDy4FWmNfgnum5RpxP9LXEPKb2pznH3Mpp",
  "key20": "5NobMyaHGsWDhsmMmsMtsxt4u7M7nxJNMN3WRHVPgCfYZvZdZghEDPagCNcxJX4MwQSXs6so95F561q3kPPmVhC",
  "key21": "4cA2U6VYxf25gdEuSfrHS9wqB1Uu6dR1AHEtbXgdzxUVACAzoPdVnYzvM1p8pbmZMVaJhqFzpKXR9NUwVk7GjKhh",
  "key22": "1w2tNHwGE3oDGGgHZksngvQ9XFjqBiLyXMAo2tEXSinTctao89Qz875nBgWBaqa3ohzrwRjHD2D6zXMcGa5yCgs",
  "key23": "3aHJ1t4PN7Zqn6tAN9MZgc26tCdMWbY5NEgb13YNGouwBg6jSExXNDZSs87jHmfSfjenacXEsGVvAdZuGJZAE4jp",
  "key24": "2bLcU6D8DohFQf5nTJKKYzUA5vTEcGgXjkytskjvVXsZKeJbmqNi87G3BtveZTRPV51RSnfB8yFeXRLaYUnoq63K",
  "key25": "2uccuiXMEzH9b8DD7BC1dAUckihhEorTUoNjqwvLTP8GWdgHzYH5CwXAzvQypEuXvYiFisp7MsEMdrXHVknLi1zC",
  "key26": "3D3yE77XVySRYPdKxGMr8WryMkBgtKcigpC37E6Sy5N8XVD6W5cA96b9wyT9yQLUeLctkWxVc9wUVTMwxCg9t9HF",
  "key27": "NW15M6fHEqzKWMjKcFmx1NUuvERRtuRHrbZSn3Qeun2VndjHjQ7ZoKX2ekRzEPsQ6ar6eyuyzWuPkTVVxWgKpfu",
  "key28": "TkZMjXYyuyAyQQEAz1yaPMTedh7kzkC7BK17WGBQb4r4hkzyB1idVZftALM77eWMAftKS8ihMdp743t19GhctaK",
  "key29": "pHidzRKcT4xJQgLwwcQWGmNKkbZZYe8jAZBFmYrr6sEZ8FiMJ5aLWwX6ghRBs59HsTfy8RrVDDv486GxZq16vG7",
  "key30": "foAc5YqtgdWZ3Ah8fhKzyQKzGtd9vKLiSZJkPLt19DtQ7wbWNj8ZjCiiKZNRxABtwgJXdRvZSNUzmQUgGZ26qJ8",
  "key31": "4anGmSvCUhFD7UhdiXoEXiLBjcde5EPpLrV5DM4ToTTQhv6SFB2Bn3nrXX5vDm9FCqXFrWNPou4cogMpNuuEFw3E",
  "key32": "8SZXCWJazMLvgHAy42SuA7pxdCqyYcpFmXyszdYW395UrvXGTQC6mw9qwiTfjD1JN1Ab53dsfGzyBvvvVyGwiGy",
  "key33": "5pK4KsuKEoUP8hqRzdY8JWkPYfEAA2svkTZkpgY9N7ZaZXhpqYsCHo4MmsBTDXVuZeMN1NubqiiMzznrFsLM9Wk8",
  "key34": "46pfcXkAxEELk7ZSHSKwfw3PFJFkGapzJR3MLgNisRiPVNGrFBmEG7NwwMnHQWG3DDz4q8kxVNGk75KpBHL4uKwn"
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

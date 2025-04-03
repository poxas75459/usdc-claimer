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
    "34vRmHieP9vum5HJ4NG7PJ47MxEoeSpGWs9HT9fJUkpb8gQQYhR9nFSyK4wN21fnQCrBrtiqTjHuN7J4ZP7mjont"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHGvPvMfuQrbHurEsujXd3yym3CNUjMFKGjkF3dcaZYCCkJnJ3MVtohJjV36GseMWnH9A44UCt6otnHNTEQDhuX",
  "key1": "2b1fNW6vLZoecB4Ki6hmkwAv74ePjwwVknm81K85b4cjJxPKobPwfMSEC4AUcc86Cbbmchh79hs8w9uvyirrH5fd",
  "key2": "44FvBsvBqERpYyJZXUBTrzAT8GyUvcYLPNjmxWPKPZaxfCi8bQeEgVuqvCuxko1Atq61dQKJCS8Sq2zhUGvqWC7C",
  "key3": "3voa9PhNeQVpMkPFb6Km4hxjHk6bueU2NBFpPBWn8Gzw95hi6yUT8tnTi6QPyW9FpxnMi7zN19B5wtL9kjEhdF5N",
  "key4": "5VErxYAjFatZBTtUj5fREPUrKmL6JKiJ1EzSx6VQEKuzdZT9N8xDdJZwRPwm9XPYgXmDgngrJ8gH7PmEyUPvR67f",
  "key5": "62hvWExErANNwFMC3pqAVHoaEWZmDWiGCkLpPpZZz962Aba5ZmutE5SaHMpZfagLbaPzxte6HxpPDJRvb3WsoRC2",
  "key6": "5pwdEETQ8johgEa19g5cQk8ySmJyihp6EFGivJuFzM99Noy4aiFM24Ph1N9rrAkCbdbazGJZuBftn13Ro6R13oTp",
  "key7": "2sGhiSwndeMVUpbUqraQfGybmu2hfWvY1baesNsw77y2bWMYQ6iyrfHoD2zGKV4N29jjgSYG5arxHK1VY2LWKJ3H",
  "key8": "425JGCyPCuu5bPhvR6bhMMxjd8RPpHMtT7TicJX7a9uYYVycfqhtjY8MJRRSK21x5xx15C7aUtyuyq44HHDEXoYM",
  "key9": "NkZ15DqSxxUUJW7UpNxjnc6u7P7htnbw1kR6oRAuz2SGU3wxp53dpdijhq6gyXCqr1GEUyHxpN8o2hJFpxoCLHh",
  "key10": "2FsWHL2aGYJVR78Bq7kthVRwGuBropGCLJJKDjqfiRsV7hX7cg4nAXCjYyh3v88rdmPYuhXLCBPbD9m4DjqPu69i",
  "key11": "61Jqt8gm66Ce9BDXP5o9Z6uyADJU1vL3MVUm4UTowqKrvLUEXq7Wxu9S5LTnvzbGY4c8eamQ8Soge99dA17oJ5eW",
  "key12": "5GFc8ooNqoa5FL6toxoJhLzGVkXkA8F7RZdpvbqsbey5qmMV8P1dSXwK3o3hNHdBqtcpmvgAdWBs8cQYrwKaJdH5",
  "key13": "4r4v68gUEdxJ6UARC3csm11XGVHdMi7mPru9yzr3GBMi1uGUux1hwDwxehnTcT2sfD6T3y6TD9pob7sW18MQJkyC",
  "key14": "3rzAFauAFMHKSKtVkFHAVJKeXS7cUmb7nqYGi42xMsfsXz6eVLXeuW3KTm8f315K9MKRmekfaFhLbJs5noRH6WEB",
  "key15": "2qyXWRMMgTmJfeonYLEqermdyeKkJzZmApQuJ7KHP2rep5sgwq86bhNiCwf7JuNBwew43ei22eW33ZJdw3M4cgSQ",
  "key16": "63ziomU5fW9UG3z9cPQvmcxTHYT9zyxtk7vcmeJ58JJDmLP65GMKQpPMZJ94MMnxmemifFiPSazATFmwd5A1u9A2",
  "key17": "5i9H5LeC9ydm5zort9Gx2fb2c84XpSSkTNptNn1urL8eqgSvAibNaQT27zLJ1TKTHMVEFFBXCJ8aeV2T3vs2vrX4",
  "key18": "2xw5FscdKafsqH4t7pKFXYXXt7hAFvY1Hjjff9QB1oWQ2BbHukz3BcPrwn1e8GF5bA8iQ3qhFjHPewtj1AdgEMP8",
  "key19": "5PL2RT1hdiT7ew2CkQQWEVVE5PFxAS1yhCe5QjqF1WqnKR5G6t2NZyG5sE5sTzvCAcAEcbZyJuw1xQyLDhbtqwcE",
  "key20": "4yA6Gqbohc1sd4bbvBMzB21Ks4KVF5kGKTd743Wa2GMHGmkcM7mCFMRxUKptDd9Wn4F2S7RESCeGiT3NsVa45h2T",
  "key21": "3RrHkFYThWXDAaTFK1WhzcYHVudEyZ95GCdjeznSTtD41bcaFhap6rM1KMvPVjgx4B2epAxeHqr25pvHt6WYWp6T",
  "key22": "cJ29kujWNvbKvxFN3SshbtamiGDTUPVVTsyh6zx5F8pew4GKuFci4pb1HdNq8BpaigFjZ1TDYJ1atA1YSNrV93K",
  "key23": "3cn1EW6aRCwXvCszQfYHhcHxWrcEmhYxJrQCuXRwaNDFqEGytn4GeZrhirtCZQbpR71zKL8Ynj91QUHNCX62Xfvt",
  "key24": "55RuiHjtWuhTsNrhkULd2aBtd4yCsMkQQprC7sWSCRmwGBB4SqcSuPosNhgFkmBiBuuiWdYkqzoV35zzhiLY5jpW",
  "key25": "3NvcgAx2E935eymA5mNEtxjVNx3M4a5GDJihk1yY3khaQ93xDKM5dCtPJ6zGojqkAoBMzNv7UtuDMGtu3xjbEDZ",
  "key26": "4a1mjNJcU7UHQGd58ZBCfFBtZmdTXwaYsEu8xpCrR6tGGu7M8izYTvA5bZyWE99V1f8zHu2kFd37XCeKSxHHe2ff",
  "key27": "2Ni2gb1GRBkLEFk21brYSeYL4eV5nuC9v4YyK2UfXpE6LiZ3hMTRMyNaoDgJMs7v8YPPy4GGzL8TvxyTUyhJkpaD",
  "key28": "5VaEFk61gi3sTpGSFc3QukvgLqZhVc2MnpqzR8oMbbTGA6rjaA35Lr4oFc9qDdw852LCkU8CxWtcCFBAqS39PBB3"
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

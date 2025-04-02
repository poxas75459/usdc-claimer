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
    "wuNcNbNX1a2nKWwo935JuLxWGq2DSpKhjzng2S1a289sfr1imighXt5roczRCaSnZjphagAGGcMoqG9FPXApRdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28qSFgrKsB72Y87ZYp3cZ1mZnVyiSSheTvZokwcBXpgaheeqqxt6VQB21KpfkvZwqNBm2Ws3vT7JsFmL4vgyBrVN",
  "key1": "4pDRddtX8S5g6gs7jGMTixKiwxUs2sWeKdDgxPTE2iAiU4KxuGC9mgoeF7nawUqixZNco6z4VXV2jJbRPiyhXVcW",
  "key2": "4otrmTjGbgqyn1eoWaqKwreMji8FVW2RUbApfeFMFAJ5bft9wTN641WV5pUhXYK35GBUvmG4thkKXYmuj5wEZsUF",
  "key3": "2nvpd7QK2mWFfh6NigBtW1vDppSsAAe3QBnEDP2a9pYwgrrvxbJU2E1jvuHH7XwDyEntMdr4hC7wVSwz4FtLozsw",
  "key4": "p6oQWYBhE1s4CEnCm1KQavWQmhPwkepLq4QtMDC4UnS3xxsqWNngk6AgxYc2Dqx6oEHfLktZJPWAdjDKSuLZqzo",
  "key5": "2Njuh3cjrhDH7bPNqUpgiKB2Pf4YybQPEpkNcc5PSCNKuc41bYrY4PpXraHbQg8i8ZoXmepyPP56VkuTbsZyioSn",
  "key6": "5wrpJ886zFGGhhZ9Wr7JPLjqQCKbn9QTNLMi3Mh3mdCS2RPdv7SMaE4wVPN5345yUN8G2sQA9YfdZae2zdRMEYQC",
  "key7": "5AQCsowHQk9y2U6yhSfjMJK1eEbp1mMXjDTXcJnUFMYghWkKZA9i9nDubTGDhCyCBWtqWeYC6tTgGVT5Vs8EyP6P",
  "key8": "4tPN62ATD19bodhyeWHsQU8Xp1ykewCeD9gpq9VWT3yb76RZnQ4xLGE9NtLNyZp5aPzphxr22VwL93Pj98Gejegr",
  "key9": "5C5vGq6uWWdgBwaRch7uLu6VFGyPwfCqWKhHsdHkBornMuriRM8zHMuFP7uMDXpWCC18r9hPbjJW1CLhaMMNdUaG",
  "key10": "2d5e2YFPMqmV164KTGAMim6KwfijWRi4Hsbh4YuLvpLyL86RF5qUViwokV8Sg4j8irPnAabSP1tpaGL5W6CJ2geL",
  "key11": "212urGAzb5qzKGS28NA15WoGQg5Q4jQidH3kcyzvNcXYZnD5rZkwJNLgFSJHU5jRrKwkkRFQJMFGYhBTcPxXei4C",
  "key12": "4PR4BmaDZyyc1jAAFaaDQ7tmwX2VaFM4jywqasahD47cmHx3u9LCR5L1eN6jKE7ji5pYQ9ohEEH7mPU3mVzdbjLk",
  "key13": "42xaNHNXoAXThbpZ8DBZow5E6YXnw22RRJA5tUZar9ZTiUSnQcCyaPkLG8HbogacPJzWLCH2pBRr47cQcV4kMygc",
  "key14": "2KCu6EaLjvrswMdbPM5Tr6EtpdA2nhqa5cWLyjWY7Vx5UjA9kTWa61SUK5MJBUmx1ZNGNmAFPXpfG2LHyWqjEFav",
  "key15": "4Gem1vcxsgSCW1bxUYkPCpRd7E32EqeLK4dRkxoXoXETRoArbtFS1xpidVeVFnYH44DtH4sp9YH8UEUDYLY3owHE",
  "key16": "3H44zaxTXJmX4RR71XPZHv62ZzcF5zViSys61KvhGzreMjCrSkxE1b5hVFuisoGMrzFg4hTgS7C39sQZ51BC4tFC",
  "key17": "45RwcfnYSAezD7Tf9EMwzJEpTSuoryUPxTSRZANtkQEh5Wubh7fgze3tnJA9o4duWbTkKYeR2unajLxN6gqFT6gD",
  "key18": "4uL5oUynLFjjkkUJyqm4A5btfUzH4hGUdg4C2NkBFrfUfUgXt9LQ4gk7zKHmu5QLv41Tgu9AFCsfytTLrpM7HkF4",
  "key19": "58WMi3etDiJ7N56DAdiutX445mgG9SzxBBnmgnduPdZC6cM552sDW4HWUqMcA2GcMTnEamys6B2W9PSfTA7VKsnR",
  "key20": "3jy4ZZKS8nZuVbFET73aop578MF51AKJDkGcASGASHUNFa6cTyZ6hTuNV6gabLQryKXnVjqcV8dstbzgABHwGk1d",
  "key21": "78jmTAp5QxyDcY3AH2r6dDZ1gXN24dNXoULZqFM2y9QLvpe2k9Qyh4qsN23XB3y5fToZqxamWGsU8fdYwZ8PaW5",
  "key22": "xjSqwqrqoguoxcVbHyowbegxbRzoffZMFRfseEepRNyLhpf97eiKEzEut4hkkBoxVAaEEmzESYpzfbQQeRszvpn",
  "key23": "5S6Zb5pqjn8nK4N7YZeTBajhVtCS2sEXpjrmqB8DTv3wpnk4WX1uR79ZDs4bJJFbV98cHMvsvd2N6kDrHUR97Az9",
  "key24": "5hBc52gFRcYCjHWWNNa1nudRj5a7UT4ypJ7ADNi4Sps9DYJnwNj7PFQktBJPFHpBrn9Jewjc5o5xZfjBAiMJFcca",
  "key25": "4B6jgCvT4kYdBcU26MYVL9qy118KvvKSk9s6gs84wGVHoLrU7NKjS4BoeEDapurbkhiaAZzRtrXVvybxob95Z1c7",
  "key26": "2JUJZRqioqTSx2jokwJjS7unVmggGmGiCz2qQd7L4mFZwhjC4EoiwRaMM4Bu6s1EJHPWnZHHoya9UhbrkAH8T8yz",
  "key27": "4C6nL7SDUTB3zEt3Tx8gw4PkPUfJMC2zhUPoeAk3faR55tmpwaSRvEV72NmUrhKeY9fjV8YigWY6BdVjUkwMUxKA",
  "key28": "3r1Qge1yirAMgQtZSXZ2QzTeABBZNjKoahxGDbaG19n2LvBJq9nrTrEnvYeBgHxpst636v9FVs17fT8pd9bMjmXH",
  "key29": "34ZjwyJKM6hCRaDFgrkrDf6784uV3QA9pscvCYkfmpoPq6hjURH9tc5mTzq63hZZj2rpqap2vhhLzJ4FkACA74dX"
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

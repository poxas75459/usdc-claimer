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
    "3TUvgWLh1yYGs8mxgjSS488dzdJmRXpbEWfASt5vHLEbEHD3uk5dX5FZGyooV6QEotAMF2tjkCovhYEhT4wzAYqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uDHurgVDrpsJgEgVW7vtcuPvR7uovqe4GoWhmpTkpu6Efk8aGa1MZE1oxBd7dcq7iN5dUbftkJTqoz8aTmatwHa",
  "key1": "5BrTgvvgwSpHch6XAD4VmhdRudodHTbfb4RhXv5cK6KQQNBSTHExzeyRyPuMFeqMC3W3vrsA5EnFTqZkhrPW5uHB",
  "key2": "4nFawcwcDWmVCyB85BgfUmsrwnoV3Lrh5i7j2SYU8MVknAE3U4arXTfxbyxaLFt83B93kAwZbwFjBgXCd9mpNmgN",
  "key3": "4pMSXScvmiyShSTZAYFyeSL1vmbSAgaMPA9MJTR7XqhmFzAbvswaZxpCgqCvuMqS57oXGM5CkgB3r3muDyS2SrFu",
  "key4": "3HLuedCy66dNqZmsecLXQEF3xj4prCrQ7njGzoHdCsQUqg7Ug73ZPMF9osNcZCtnB9Tv7JDHw5JKwgHCrjacu3WU",
  "key5": "4pzbBnoaAypXCDpv6f25VTMq5iJqeRZ3TtKnqZU1iND6iAs8f1xvnB4Gq2XFdAT2FwdNJBR77oVVb7R4vah7pFtf",
  "key6": "2M2v4FWJ41uXNGvhXMkS2W97wmjH3SffrFBxyfgV3brbTmty3QXKsQFh8P8xkPA1sLVj1nyL7VPcmiRgnivodwJ6",
  "key7": "5AEKNh2HhqxrrKV5V3vWTL7cv7Tk5MvkCZW2S5Es25fd5rXS96V7YP8b2oRKF9qkiU9qTqye2dGkN3Zjc3g3qFFP",
  "key8": "vSddBRhdtF6T895VddnE3s4iCpQncUburxKLSNQUt8bWvDvLa6X5cen1kqBUqTSMcMfgigJYGnZbhTQyMYJwHeR",
  "key9": "3ZRDpq37HC6owNwcgkFDRCXGGfLgCrWWmFsvzghshCupKYjb8dxJA8Gw3uTaxG2pkiSnuwE4ycjPCeX7duJDwUp2",
  "key10": "5ZdwF5fuPNS4C1UQitztrvyFA7pgzfPi5EsqeBLD8PEm3tZK5MCzPaNAo2obBrYY7wEFsmv5eZqxxTqfUPNsds9t",
  "key11": "2ooAWzJPs6uwVJTuvKnGvdPeaSuvEb9fvJrFyCitukdtnLeCFToKhRnjVPs6be31CrNMauFedgzVYUzMNdDkNvDp",
  "key12": "58yWzVD2pEikQi3MQ9mJ3aLtXc5swLewcLn9hFxZHftr9yfuziduf2jHBr8suGFKEmd9VRHFGcJQFKjwqc6pJU8",
  "key13": "26BErePjFm5oxYscpS44JZ6N4NTLQuwYr5rzxLqTTh7pw9zf5bhj9VFtjpcvRapMk3nQjFAqmMkyVzViFH35tt6a",
  "key14": "4iBznEAV85k9CMFzuhiYbkQgTUVRZoitQxRkHEt7J5kMBF36M6P9BEcXsGCKZKXhJzMmeW6DqARhd4LiBfQt9mGS",
  "key15": "4RnyMmc9D8omuq6wNmcRzbyP8c3HJ8cMBqiqnXamESg3UBwgWq6xRSo9bz65n3redazxs1WT91VVXPHdKaS345Yf",
  "key16": "3AcHAocFWB9MX7EUs8WNutQmGPTsuPiht1sqZrb76DFuxvXZPXunyBd11Fp3MiWgrgfUdfZwbrWqdG6k3cuaUrso",
  "key17": "3454EQEEKB1RcBpYXFJZCCEci3GQygHk8iX39ywL1WoUcqCB54EgBFRWChAATuy9FvWkepAzqbQRrV9BjbtEj9nD",
  "key18": "2sadsBJP3KRjtKnLtA1CJNPqqPFUyncMxeAq1udpMG4z5HvviL6WWiHW5FFSKXquG5oE4QrPjXvurrQwCch81TMH",
  "key19": "2mXvvkfiAS1ziwE49yvyHetReYWnBvpKynSEVguh7C1iacgquLZ2WMUqntVHEumwUaYGmEbiWjrMGdW3o6BS1o6m",
  "key20": "3M3drifY7xL9stPknqMi3yBNMUJ4zrrm5zgH2BbpGCmQE3CYxfNeJYzjHF7AapY7Jk9PeDKkdsUkrJiUVr2vT4PW",
  "key21": "HXN2Le919PT2P1Lm3L9MXWQ29Y2sTTaokARUjyXCNdnCB8qhh8TP6pWJVEM8aXydBivZLJLCTQNYpegiFYzKqKY",
  "key22": "Qxy2mfcT4RAS6tX196Mn6bD59CzNkzSH8eQPnX1vfQ2sGqy7PDuiBGEYmeSNjGHWTMwJE2dbyYBbHYF3j9FJRJQ",
  "key23": "3Uzpz4VcL7Y5myiLu2Nj9VA4kihLJmuzSjsyCoYDgPNZaB4Y5RissiEYKSPiAhp16cfp5KfXZrNMxuHfpx6nUfRM",
  "key24": "3WvVWnEqxCwDPH6ieUZmYCc7B4uoeRsXRWBoT8JuTVHMHfcF87RPugh4nJYeAkffkqjDXkqPe1e9DEByp9V1yGi7",
  "key25": "5ip6owVcJBhxD5cgL6QbWWvfkYb1gXZ94cx92tbBg4uh1iK7fiDpDebZ9R8B4B5dtupfqp8ahkxxNtazjeScjh9A",
  "key26": "4RzAALTGc9ne2kKfBqt7PggmCH9VAuoLXQuFFnq9CyiPdkHv3LSTWVJ9xNz7y2NcrqQYaz4hSSHptsPEdbSFdsan",
  "key27": "2viWN67HdPa22h9EetUX9U4bTBzYUGYcM83yCs3KSRWwJDL5H2CQcJFpqToePfuEeZtuL3UHku6v15usXDDx3R1f",
  "key28": "es3rJr71n4p8WXrnLRxxB9TLZ7nnhfoXhR99pVxafqzTnfSywHXF78jTSsU6T8vcU9QvtsWUFeitRyyXkaUq3JF",
  "key29": "3Vt8zY3QNVyZoHQn9C8kNJjBBy8xAHcYAfnt5xLKuz8CZ3MTo16XJGCdfzVUN3eoYXdYjUzKtm4GsdVQAnwotPJe",
  "key30": "2aMiHW6ofEGE9Yi5gyu2cpc478TepPPDN2WcZzY8LRFs4NbixWAybSEtvxfHiitPemxVfYtCtTjCDCey8N9JEqQH",
  "key31": "2JtS1UVyADPM5ZCFtDmadLUA9Dy9v9fmucMz2Yuv4YFENDXyNWL2S45JHP16Hgoh5fS1gizxUgfKgQKqafa7Jyv9",
  "key32": "5BdcdbDu6yxD4QUiYZdazL5ALUuw9kLkSmCfngUkpErcapohG8uZemuXk81CpzRLq5ADmSmRYi4QFowvWJDdtCY7",
  "key33": "5C5PZAApcvRJzFeDSLUWQKwFYpyjiMTNW63PYmVaUcurW9TjzRAyh14AAF5AJ9AK6RzizD2SF5z5f5NtEcdmWUe3",
  "key34": "2QvxPbGzN2HZFh2UsrvqbDuUC7NZDah4ykCK1rSnvX87e9VTcJM1uVaR9nExXn8KdPyvyXiTTeKdGzd2iRdL6x3V",
  "key35": "9ToQWrBTUKzgExf3DAtWNryPu1zjzxXycjk1cXRSEcTbPTEwtJCtcdi8VLLRA65ca6ZbGcjep4BKs8VxmMQe2pj",
  "key36": "2nKozNZNuJUKZkmHPd1V93WeXPSkDBS9TKULbzbTmQLgE1CEzrfVznkwr5CpoPhieA8xipVuwQAN1hbdGRtZwXwH",
  "key37": "pw7xfPsA8SViMyxuTRPrdPbBSweN8tSSiLgHkVi3QvVfd5RFFM7oyAjFkSqFmGVUEzgtf6sLWHVGJbwVr2ZycRq",
  "key38": "4HBDH5nAQLBaDkeABrUuKXkMC4KoaiPhtjHDGB7mguJjpXhoF7bomfp2YFLDN34u8xd25surzsB8CEwgKHCyRzSz",
  "key39": "zkHCoUKven6TdVwYoWNoUqXtEjda6mGjamUdKtPW8BQzF3hGhwteAgJ7hYR1mEGrCeVZCRMmXxpU2GRJYZRiFd3",
  "key40": "22naDDahDsSvcdCbs539Xe324WAQNM3WgTqmAAZHUsuEzc5KJLSFybG9VxAgWzNLCJtiEWqaEkZSRtkGkDe5d2aG",
  "key41": "5zv6r45CSogKU2nZwywiHvskQWdM2nvhYbbJgmamFtEQZfV3qC4NvNKNBCUdFYzVvTkmtmSqtRjWub2k4wKMYG3p",
  "key42": "2ADwbBBym3oopwQpmDgkqsLa1jNbvChZJFLKX2rHqr18PdbNcMV1cenEhNuawBwuPuwKEgVehGM5m7nUxo6fnqhj",
  "key43": "LDT7Yg1XSJAw9ENzGpvxPKqPUNughZViYsCPNNmnCkPaqBoszkSuP9CEgQDjiFnXhbMi7gdsZZ6sh4mnDtHc4zB"
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

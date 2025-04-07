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
    "yDqxaKBwsYcwKBhcxDYfjv3WYrTTA2e2wXLqz3M5mkGSrg3AVxFR1brX5MkxuxMrTSaieCbaiAiTCNEsfnLDng9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhRih6CoS7AA6PijboVUJHkZtnpmFCdB3PcCjjKtfvcKwvdZptZAm27C5yzFKLYCRksdNimN7qmKgCAUvbsxKSB",
  "key1": "jmAS53iZaX8zEkbhQaRTE8ZBQJ3pHEMGM4FuZNibLwgUTANQibauUWPXWLEKJxgQ8Xw2Qwki5KfRzZ85u1Xx5xJ",
  "key2": "41K4zze9xvCramf4dR7JbBiCbBjRccBuwzUC86BowTG5DgxydV2mN1AqfTSSeUTxpVsX6hagwdmRzam6iUackgYj",
  "key3": "MPRKUxuNVeZ5gA4XqKhKpoFZkdjWkVtBLRC548oRx9CUgrPZJREMqck61rtAfYQAVEd84nKJAuJx4UUebpuVEKR",
  "key4": "3jTiqD3oTu9xQ7bATauTsiA4XYPynkT9XKHAAt7pNzSr3LJ453hmpRdKa1BNBYrVAz3U9V8tNzdXT1QeFN5Bb1VC",
  "key5": "5WpVMpFTNjrn2RdygWC5HL5M8bEC4N3m3dHzmVtNCbBFMfpaQd9Qe8uhAhy3bAiSvtCoihspER22dURtjVArHD4w",
  "key6": "3RLNCyXkEDmgT3CTvbn9ZZ6DQgWX2A6g6BjSaT1wtRQsZvP3ReY8YkDWqRHzt3AJxZthDcUsHp5MFq52mxuQ7AS4",
  "key7": "4pF8CGSFd5dtJ8QJfK2buLhg2eLAwCBdnpMN1ZFxgwzDUDdtYNqLXdBnfmWLKF9aTYggqxkm1hKxGtmnVyNYvmiB",
  "key8": "ZkiusefFeJuoeV5z2TmoxXT5rwZPLXAX51rDi2tUgGZncJKqc8EpSej1KR1AsrH8tgWoFgjTmp8rZfquBMCvDwz",
  "key9": "5FQkGiiie76UdHki76k5qdu92vE7F3gWdN2LfQ3brLkEuKBNoTDu2bkfA7cJp3iTAto4FC5KWdfpWcWUQyFBQBFz",
  "key10": "3J3ugT2PBa1TFUM7ACngZXP12kxo7RKzicANLRYEq64LzWBws4y9PERyybQxCZkJ8rxy3rab6EoPbq4oEHhffQ5m",
  "key11": "3N5w8cKJ61hAeqPViWtoCLurtEs1wP2vuLgV437ZL5Y1kMVGXqDM6WSERYhB3XyemuTh3mqyfXPKp94kpZXfGgNx",
  "key12": "3vd7yLhhyHsGoJVAHqPmyhTXjyYGdKnBTtbnYRo9xsoQ491XGTZatFaP5eu2jpcoi44SVYz4MVarUECov8efEoqZ",
  "key13": "3yTXrt2G3gGYoYLahHKKtrPx3aaTuq1MYznc2DprPhZyH7saYwxN1HR5kTt6934X29PXeGmTowdg5W5fQhGjzWQd",
  "key14": "T66tRcaRoMYsun36roPhAcHLwDzkhoFtsZ6K8ycU7MChQeHm7K6LthXUEioa3zMHR8BDfpthYtmj2hxRhnDpdwC",
  "key15": "2uoVHNzwCfqvaHi8fgVz7yVVzWDgdZKd1d4frUwMYXgUVdLrTMsy3F1cjSAaE9fsUEa2oo1uhrPBfEzxTPd4XQAk",
  "key16": "3ELzbkL5FApqbQB1VRdgTuYiz2fjK4h4fMpr7ufHMvJeCFJfXNkg2sZ9vR7NMRMp42AdLbSX3FFAYbUiiHaYJtPK",
  "key17": "5uaTEXo276oqGAkEYMje6mf9VDhMygMpEJEcKnVQoKePKrqzho9rodX93Yn5Gyt2dtWw1ksiCCkpwQhtNkpcaLbQ",
  "key18": "2zCsJHAJE6PLDjy6CjQ8QywKj4iuupsAhG6wXwVDjr9x4nDLT7iUotgBDCfXngfr4zFvEfFvgyFo24LiqFBUyNB5",
  "key19": "5e2Xbf5QsLKmgQwxZk3ogcBxkbRCYC3hscPzqNQ5mZoxCeimFjD9hpiGTnEy3ASSNBXagynk5PA5KtqQUBncykQV",
  "key20": "4G6o73aCgMiaBYBC1GfmsBWrvGnaCDKBw28cXM2NyMZJ3kct3mUhxziMkz89jUhNdcsLp45RZgp5ALkrxLQGBkMu",
  "key21": "389zCwBLGAd7eVZzUz6N1dDgpPmZczaTRRVfZEJhatNv5LMme68HT3PjcD1MdytQGTs8WVLbz2KhEvLutW7wSPhv",
  "key22": "62n172XNnsqWFHb5KCiG9vEv389LJXsQSNjPuSc7aESWAKezwdoeaPZ8GcFLZF3nQ9cjHki6h9TYZxmfFupD5i5S",
  "key23": "4MZ4m7ZbGTf5JCKCzXDGRSm1nVtkD6pAE9CRxQb5ZwQtDk34fDGWSRyNdPcr1MThonqw7STamhbJWKQNpE2kxcTt",
  "key24": "2qXp4CRuBHNuyzQT42fz9JUgZXC2jEfinrVsgwkuidMFmHNh2tDoWwZiVzsfcTXqAsKAT3F2woMtDfkSHUP6R1BE",
  "key25": "3zrhBknH2EB7DtyoLqJbnnvDmbUJFQx7FwXLo9aVxKR12nnUGnkR5nHkjfSkH56Cy2ciKSYe3naoGKi4Wm1s4A4j",
  "key26": "5f6WkagTymX5CVqeCQ1BhqXtQDFj1Q5YuPipXSC3Z1zqbSax71wufvkEWLfTDpusmg7HWRkyW89vC6TbHY62XciX",
  "key27": "3kUJfTtLgVjCRZYWF5PZqPEVjdSQVGfihEmc5rbYZo9MnBvVGyGpia3QjPGqGnMjVJ1CmiDCUBNCbDVRnSfAEdBZ",
  "key28": "4XKJYgreEzSGogZRZyhzjZn5tErEM6yLF9XV2cpbZDZahz39uwGsvY16CiawhGFsDED8msDRmTW59msQC3Y4266X",
  "key29": "4P7HmNLfEtTdrR5zd2F89ys5YbvxxMiGsjBQCvgedrjLRvMjTvHHJ8Jz8PJFZz61WrovUgdoWirRcAP4Cks24wvf",
  "key30": "DhVngVykCuMudLQeov5WLpcaMVidiMYKBXRhMGjhF2X7Hf96s4JzSPWSYSJv21e1xEGyuZ2EvtxRZxJTsBArnAL"
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

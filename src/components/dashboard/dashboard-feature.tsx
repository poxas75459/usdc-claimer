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
    "3wZxLdJ9vmNAPRwZApvGiviTYnfxQ1f3TQWvjTEiFhxheHBUxBYcHvKEfGh2guG5BazFryBkcH5Pz1GqZ9qvHyfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M5BRfuuzuTB1wD1VRwskN1PCbWVQaMyNcJdpoBYdmp7ELwCxjaKxCu2ymJu51QG4GqcsD4Xx3KcHS2koHK1cyYb",
  "key1": "4c4LDZDCwC647VC2SDLbfPxSdwrxmYFLYn8vAA2mfopN9aAiHWuDaVYdcAXhWwKs7jad4dJars1vQ2BopcGCqDzz",
  "key2": "2ZmcBSycs3VYu14XK4M2mJvSBKQYWEYHoBLqpFcF4SvwYHQsrhNrSBTgZ4mvPHMEQrWPdN2n2EBP4m8gt8DKDWi2",
  "key3": "ieo3hWpsWfi5RnWXBcWiMtAmQDxLvb39Dh3Fj7WWoKrvjpCw86rDPdUar7UbPoZkBySKAfXqiq1QftnPFzYFKZK",
  "key4": "2pisPH1DS4YFLLYJQAACwoTwcob4JPygFJ8RrhF9HjCfd6eSRDVJYg6QEYBXRQdDFJ4aX8kNfRtcXzoNZZ51sHNQ",
  "key5": "58V6XwJjxeRzmtuhHwsyhoZ4nfpFq28JpfhPBiK3rBBiUHkqgmAx3FESx19G6UVC8iWdUhQnETQxFE2Zn64JekVx",
  "key6": "AoBMfYmyJpESsebczs2RTS6vgy5fDtcGpERtgLw6QwuSMrMp52pCNcLBcaxhAfoHXYp32bfFLtHyQkQHYasYj7i",
  "key7": "4wxW4tspskvqkwGFUM9KygzoPktrx8nJG46i8ecXoHTRkSV8JCYHRgg8KhP1ggBVnLbaLRaCAaekYeN2JFSCmxSm",
  "key8": "2GjLXoTGWsdvoraTU2bd83BZojTzJ5WB9JMQXtqJXRxZDxeTpDrUhZjRv4BT6Rnp8x5wwBMW22bQo4d9F8ZkUq6v",
  "key9": "3JMoX9TbcD7GBKxaXKTJQ5oyvmX6EyVukh9oSf1UdBF3Xcs7DYEvbL4TCoHRzCzqp3BbU742vQRoLNTgo5yUU1qb",
  "key10": "4DRAwuYQRNQUunQ1meuxA1SxoXPwANjmmw8mnrtxQuoXWe97AWMM1AbistJxJQVpGzBCdyQuv1gPDG36XQYCB9mw",
  "key11": "Me3gq62XyzwzaKcqCdpgUM6jR9V7iDpMBo1x5GD7F1XdM1fC1PhLJ991jmjbcJuVip6MwjrML1BVfTvn1fMQQZw",
  "key12": "4tCJF3gwFDy6QD7eKN8YQq89uXMiJDQ4VXFJC7c2A6Rm8HqKkfQhPuLjQFoWqcwQf5SsQdpvFkL9gTactRhqg1Vy",
  "key13": "34TQW4szstNS8NuSug6egb9VM3e1A3dhcKFfwfy7f4zXTuehJmdjCtDzSwRUnSwAhXoFf1VrZdEBJ3PY24TAhpcN",
  "key14": "43STFJsdamMQbm5QE8txCWFFMXGzPX6sxpW8WHV2xX9AbMThLmc7DvXNXLQ1oiFryZiq7d7nnpZVvx8xBtAzrjJu",
  "key15": "2NCAoU7AZjxT8GpH9PzASWtAdD2WqM29vzZ1zoGUbBGUof81PNGsdUDkqq6FbCPBWx2wNr1hNSg6d4htuXPdo7P7",
  "key16": "2ymfgnY7tx2WjZqJx7xdAs27Eb5t9KW3feM8uwJqyXba5XaGHsWozCCU3Luaesc1U3ZtZv83KDKTFxzEULJPJZ4",
  "key17": "32JXaGwPuKSp8ewRJANFN7VsApjzuRRG2mr3LwGBWbCMoWk1cbPGrqQh16uYiXwBfg35UhmpHHz3rU54pwK7hizV",
  "key18": "41oE4Zpu3tMDmRgosYykA7AheHqSZWriWw1MFDH9XJXBkJA7SZCJ7ucUJqLHgguzzuYmkncCRQRiFqFeKfHm5wyd",
  "key19": "47MPP6gLY3uFUQcLufmgMD5KuzeJoTrVWXoghGz8PwFg97Vjs6rJxtGQFrQ91vKuYBvp2Q9hz2sBxGk9tQnxAsAr",
  "key20": "4DaiEkTkZXntYzSjRioK8amvZBxnXe8Da2fpnozFAP1eqm6GFCC1TUQKtX3z2nPZNQ43V3Ko8KtSrBRKHDU4Mmwh",
  "key21": "5xJN3yhHN1pYhEnbMzeJENnnuA43ALN8P8PPUPE8dsSv3jViHReRDND53uQCn2QqoLaEEPkkPqgbB8BcFKBknbqm",
  "key22": "3Xm9SSwHreBihYc8o5bCbhAQqqBDjSwkxzJ99SRVWB48LYu3vwt1r6VZVKenirCSQY6RZNwdBzuSn8tYsvNp4bg3",
  "key23": "5RsbES5Lhirtvz2q3SVNPqM2y1vc6wDi8NDNJ69U4wxp2stFDEjSgiVvDQc6jPynENdUjn83PoihAVevPtGVgSRa",
  "key24": "wJmZrkPwUGEeEscXUEr2EYzVwpatgr5yhyRRzqbuobcmNhmCCtg9j5VVp9CQwsyZjNjfcK66A1F3vSV2EZWKvGy",
  "key25": "3ayf2Wfxh63BFfWXCSh3frRBiXJBPc5udNTn7bFmrZHHn3X54W4PgMCMe6jBkhoE7dYAfHKTVa6Uj6U2SVvr84Ve",
  "key26": "2SWNcgd6VhwJRjaaHoT9VKv5AbzanUkwV9XiXBsvBEEBoK5WwUdazictojtDLAUaKPwpQnXc38Uj3nFzKmCYXnTR",
  "key27": "VNoeVQa6LisH7DAuCUZuUoEJ5ey6UySKA117NbbXF59vJ1mKspRsR85YRajhca2qg3M2Bp2PhtzpX3hzu33nvCZ",
  "key28": "54nF6BA4r3TadCqiKqWYTfkFaPCCDzHvwv7ZYTakshV4bwwWuyMk8M9aaq7JTbxEY4QCcxsGet9LfKMaQAdEMMeL",
  "key29": "5WnKHDiUNYZwbTCBvobQtLyFFAgJkVz5FTwDKJ79VZyjWay3guxnZsk73PWSyGod3ijqEfoM6f4Dnso6qkPbUfUa",
  "key30": "21j3xuuPG4ZdD5eMMxx5UpNAEMCu9ogf6CRHQ8TMv8Q459qPzBa2imbL5QatkvtQ3PES1u3y7Twhncdv2Qo6aAAr",
  "key31": "5CxpZLiC7G4kWdPYapjBnZrFniDZUPg8Lx7Y5RRbE3heScUdGKVa691sk6fcBzqcUiGUWw6YR5cPq7eE7G54WgeA",
  "key32": "5jv5Aq8ZmGYL6zk6kwGTTF5zynyUmP8CbSDBAywbqzhBfaTjKCt3SpnviB9GqvCS7adDo1JToTbtpsFxHbPij8q4",
  "key33": "3ScgRawLotpEdrSUWNnDb2DUjUNtpxM28L549hquwBnw5gxYc3YD9ng45mJyCLsn83Yf46Mi7RpGPBWNkdBExxem",
  "key34": "3PbPp2Wpk2JM771hvbreBDutEH9XPLV4zm6rfYUSmfqAmHgP6MybsztsBa3nRjmK9Yuhk7nzBJksrP5t9kBbJ65B",
  "key35": "5DopiiWcEg2i6ca2yJtgYafoe618qoWRKw4mPgF3uZ1WhWn2PeLA2fB9uxZwvXLNZcAJ8c1h56E199XJHqCzNq43",
  "key36": "5gVrWHwShaRQT66dR8gXDS3Yv58hAePsxunr4MfpC5miJpjTVkyYRHMciFL3EtQ71nrKeE7iSiHH8uhfCS4jg6RZ",
  "key37": "4xCxfr9k1foQJYcLwR3ux9qayC1eAwWmdf2FvVKrL8MfgBw4iCBa7pHca9LeG9Q1rv3586X5cPiagTx88JTATs9k",
  "key38": "2kccGgPziFNuwD3ioEUxh9TRpGYhRSJpQSkH1E842mvRpHpUVYdc5F9dhXRWgjCbkFhmx4Uyj94AZHSuzSpfmvFX",
  "key39": "5p9GntoHHmRKpjzZXNt1WPCZUa8Evt1pKSW5bPFguzyTVdSD6ibWaoekRYcydwmMNpLTaSBnF2RHAP4CAhhRT4aa",
  "key40": "26gjABjLX2zTScEfvCxmbfU9KLHb9r6mUt1rhXYNA8NepSiKB7nd9ZJqz1s2sJtbrVcR1y3ruUyrsnqUgZGM5FEm",
  "key41": "3Sjm6x5BCcr5ygCqDmcDtN3kfyhf2gb41ezmvgyGHrvKoUnWt5t8WP7MMzTuLCm6XEJP9q6bQryHphnUzixkt5bN",
  "key42": "4755FDHJBkngxTsXzd1T9khEnLaDaVx3JyFmB1enDDc1M1c8TgCtcZFQqc64aiBNCmEDhHD3DeC6P7gjx8BJRdac",
  "key43": "4JHZn8LoJvj9gjsVXB9RvyEfeoGYrv5p4Z5mw7V2SCdcqynLAMYYV9BYCFJ51wFoF7VdFjX8Y93UDUQvV99cmd7D",
  "key44": "3ykfND4r56t3qoS2eDELXuKhRvB8yEtpCP6A6Fx5xBvoZkks5QgSz7rhc4c3cwnznBoFYN71MZe1ZMbLnh1CDu4L",
  "key45": "5xu8KcmTsUgV3uyxt6gnnaNjS6wSiKzeh6ZfbqyEcxhpjAoh191fYysfWPfW88FvuWVHqjb7gt3kSfZ6akGoxvXy",
  "key46": "4Pswoe93a6UzQHx4wCKf7STVX7L7E1e1AouCfQ5xkEEm14yMRNf1negmW4RSbjFTYAEoxPbFbCo1vf6piE4ghd9E",
  "key47": "PYjMcs6RYpv3hnPWeRBbjEyydxbxZbhXVuDYJhGA3jQ7C3tazriPXxMRaxDmYN36svxX6j2ysHSzfTcDDQDnr3L",
  "key48": "3vSDRtX4UaCa4V9GiQoo6otgVrrKf3ausSrkzQAFSQRXjD7SZ75Vyt1Ecj8ejcm1D1WvZUhokc6z1GLC2Wu54g3L",
  "key49": "5eJgaThfSv7ehpEHREqTgoKn7YzmNNZpsGn1K3VR2oJr2486XRhwr7wUb7gGujPi3q5Rsr8yHwidWffJQiqbiBK"
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

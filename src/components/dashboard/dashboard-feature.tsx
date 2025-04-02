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
    "58n852KLFhDZUTR9NmeELsJ2zkidMX7tJYmbVXVFMJaHSP5BrcLwTw1g7ain862pfhSHHuRbRoGRzZxFS7Co5hr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xANWJBruRxe6zYZPF1uuhgYPoAGVNEcEizanyTPafmX6DW7uJKB3AdcKLRktSSycw27TkSHvLi2sbFnpAu9bAhY",
  "key1": "41dcKtkZzRKBQX5kUPsNqh59UcxBSuCm8L6T4KFnWxg3qGvnwGE3ZkC5e2Ue9Lu9EnMVH1twnra4wRf3E1zYAzf7",
  "key2": "kWMgrzXfCZAxb7jP786ddy1VNSxi6ZZkkf1pXf7GJ4a9X5crNABFBbYbrqw4MzHwLFjXGAk5jW3JmwsATDN5skb",
  "key3": "5fkZsa8KSULWkRHsLyshXYBj9wCByH4YocaM17cH4Dq6dmAbbnwZtmJ8DVx1U1xzn5SszNA1jsM5yxNQePhsaMEG",
  "key4": "4kxmTpMq4GNfsXgSJKECPvxFvx969nEvn1yp1nSA87jVyvv2kRN5pivggXs5PRvhvxfewssjQjUytcQYQRGFfe2F",
  "key5": "3g3iJAH5jECD8wioM8ATRwYdbGmKtUXZBz46muCx2DbYb5bDbtrTyx2ij4bAgih9U9zx4y8EcCKDQVZMJ6h7WRKP",
  "key6": "5fKRq3WWoWv23EWV7x2tn1ok4TrzwwcrQBFgoy3WgrNuh3QZR3t5BaWRLUHkNtFcUG2u6xrnFarKcT3LUsW1o6nZ",
  "key7": "4ug6aGJWPf15vN9dUAJcbXr4x4ohTtRGyRVZ8DSCY2P62dRiMFLbuvhQYhFLrxrhXnyTYFJeaDhGeXmMczjrytFf",
  "key8": "ae7KxZi8HsJVDbC81461xw1yLKHqyMmMZmvVSmZD3EaRDBkshVvysNdRtNjbZjP8XpzS9uivV4JY7asAXqAUn3s",
  "key9": "55ppdydrDQuxyp1S6AYuoZ4A7KWvJrCSV2QAFR1VfY23Q6gqsMjqNMGnbdbitg4hYYuNFfQvWm94v865uX4HvbH6",
  "key10": "EUtKozsiiXF8wYE5x6utZTnyx6LiGaaSeRCgpLk78iS3dMCVPZEaUvFrK7s4xgipEQPPFEWmutWtBPiU2A6y2YM",
  "key11": "5xP7EUT9NJZym9fDhCxQeq8zxucJ2t1uM15f2yRJH1cjoHfCZeG5WfgnJJwGid3ZfuTzTVYezRWa9HFTkBSN9m6D",
  "key12": "2AL1BqVuHRZ41czhF36js2cEQbP61Lua7m731uqoxktexfSNt7Kdo4Uaj3tL2NT4hxDKkxbcQBswtNC29VEQ2Ki5",
  "key13": "53xXDYHdsuFJg8A2xncoqHJ7o1rhd3pDrePdLw2j7EwcesK7HYCn3M5BRq4f9qcu5a6WSBAJ2VMVK8g3evz1W8Y9",
  "key14": "ytVkCpGW5FR6dEh8XJQJ4kFFoTxjc5xWizqfLVaduPha3u2o247Bi4zhpNXxuYLsvgeAALzvqt3Ntece6YM7Ed8",
  "key15": "5dxLPMo84d94BgfsQ2JXn4tv6mjAjyfKuzKQVLxQnZfsPPY8ayCCD66t22EJZG1FMKRU2RWJNHdJHxaeX7CSBPy5",
  "key16": "3G92DuZNHrt34ndB2NXpAKN7htDWDQNmH6QHuBktkiS7Pg2T1gKJtanFgTQE8A9M5NCHgofsRDxRuwBNE2CgXfGE",
  "key17": "2rECVMYZvtwJLaKAUAGbtiyux1yxLEtMnvT3NQNxc8amqbRB2iJhrZ2ye7Jk6tABj9UcbhmEnUF8BUYZxRndeXVH",
  "key18": "4pjmy18zmhBerE3ZFv8ngp7yu72c48KGjTMXEmaotXp5RWqPiMSgnhBC8o27VttXqrEEUUnueHu18YbWdCEY1VZt",
  "key19": "5RK2VRrPEVbENdXCwaJhuaL7oXwmzNjFh5u8QZKg73ngjeEtgA7ozhwtEZF7K7tL6VvdR46eMSm55mo2iqURCkzg",
  "key20": "2CsggPqxpN34Eo3eVJk6u9i2ypvo2XT5eu1baNf16K9XC6SKtUWm2XWvbagU475WKeuQUrFh4MYfhzf8dWhVAoEk",
  "key21": "43sxkwqFwK1XTk9HjQtjmKjXHSavYHaRmQ2aujoAAxC66B61AqQtzYrYsJQofR8nTDtvVzfgbmSaAycSsFWwXtFH",
  "key22": "VFsNLEMwnDgBsFEir1ouYBwN4w517QQtTwsbMxS5jkBy5KrAXs8eXs7t33LBYBfsLsuEh1scRCTCjuKe2bFkdzm",
  "key23": "5UKgYdEkQSJ8wQjf5AvvLRna3Se4ywQhGwmR3gvYVkMBdkbz1mDzBt9xLN3uCZ1AUv8CNHWG8hyYpE5SUvp98htE",
  "key24": "44vdDPbahjXBjD1swASx5QeeAsRAh2RvKq3Lm5iqLa8EnwvvxBXjKnoAv3UCwn2QJEk5vS64NQshF4gbKR2JxP9T",
  "key25": "2wtE1TyjbrFLcftr7YZU2auH4rsobkmiDvvLMYJgstYCEKgdWhMZdpVXNsytX9E5NCMB2hkuPhy7EEEffJ8bwxcx",
  "key26": "3Zd2t53viwGFaRBxaLREsFCB55s9PJWbL3TWRCaUKj2RHQ7t4rrVEUMisSsr1LrmGY3XXiwmkDn5UeXRmrNLDrar",
  "key27": "27i1LRzFaACwGivaEPHnPdFSXcVSHeKzdFGWrqd7qEG1rnTDFnh6CJ3deQ6Rtzy2sJgH1o4oNaaRpEe29BDXP5WF",
  "key28": "4fPNJGU6wBmZAaqiu3SE7TedC27WDJi1RZZUMJWdukWCvR9KqB47Bz49U9wXkExxY7RaVYQkRy6NKLanyfxpWADJ",
  "key29": "2DiikmHzkQiME43AP2b78MwN2SPTRabeoSSiXwS4vvQD4p6DeaBX2RAkJzoYb3S6x4jQtAfmxuEiBfEVScm68waD",
  "key30": "MNy156Cnb4djgVoXMEhBtkeQXu9uKKUZGBMqxYdFxfK24NC1wGQSeX3uxZd3fCcSCKWVWMCfp751ULUVMU8mH7y",
  "key31": "2Sunfph8AwCg4ZZzC6nZ6ae9NFxTGegc4ruCDvDX7NgbW4DwCCgyBreHcJxqY2qsmGBtfYVXQbn2YFZtVS1UihFQ",
  "key32": "2qTwpyrb1mp6sHUbNY2uNAUEfWAVCuMDrro9UKBvz8EDH4EQmab5DbfaEw6Wiai8n3EfVqLUjSueACKhLpN1Ly1k",
  "key33": "2ECgirZvdz7UBhf4kN5ymnnvw6nTGBBd1CjQiGXQowu8PNavkvwf68vQaCGiLMGLTGieQqjjzJV3BGDhxbiutNyK",
  "key34": "CL5rAnWZZ8em6KpspHuLjjEWFXNTLpEH4ix2hqnGfHwaFDok9j1w1A9wXQ4q3gF4NLU53Hs1uswmrvu4raTHnsE",
  "key35": "5nnW7bm3ycpsc7nR661qXnqZzaciEtxGM9suWnDfSV4riZrFDCs4fcuH3ikgD4Gv9jafvpBzVYESvvD93wwWNiMU",
  "key36": "5AFpo21goNu3a78PCPRbaPNGdXAqTJV2g2CGwcf7kE1mageMA3Nv6afsVmNJJfeUApkQCpxEi9eTqxxbmfGYEFap",
  "key37": "Tz5MRL6hAtqd6SxRY2974NBtXGATTJfbjPLEHMQE2GSKSgS667rffLgWXre7whBzw3u6DysxS7mrH4hirNrfv8o",
  "key38": "SopzZ9rZoCrY34BuyaFFzs2W2sCyJRxmoaKyKjcDPFe2DKuw4SFpyDYJ3A9YwSNMZTGbXiXZNyyRNjwYfEfsxnU",
  "key39": "4iWWMzZgC4PxA1L5ck5khpxA2y4XL89HU758xCc4qGopLZimf19G4cJ7o8wNpHqnjCeFzakFJZyRspgTgJhEaBTp",
  "key40": "4V7QhTWDY6MHDuzVWuF7M4YJJSRHDqBZw5UDSAikKzsePwwRbih6ucNuJkGmicQnWx2jnB2dGgznmHacfL5Rqr2g",
  "key41": "4TieQpqxJmRD9pHRWFXadhGPnKCtCX48zMEZBdrWX7hcvaXaAxPxq2JHtbygUaeGmkMHU6ASGus8htzry8Sc9xMC",
  "key42": "2F76XeFveq3NGUJxxPcZmpFFYY9MV5EwYmo6c6VRZDyQgs5aGNx7kXywfMKHnyFK6qom9HV2VXxtMP2kEYsdBpaa",
  "key43": "3kfa8YJA7t7cw4Twj3X1fUQecYCRHobnfP5dD163XNnPjXRquQbaxWjdgLHcFAGrVcSe1q5exxGTpM7iupyYj51f",
  "key44": "2CbZVqYJ7GuedkasAH6DYrrF2gWMnwNwpa2AtZubLFw3hy2vU3YRdy2SLoDDn9dadGj1tFQj1sWNCnD943Yeodcr",
  "key45": "5hiT88zhZRWac2pZjeL8V6DziVBYtwEcSA2KrZEgQ14L6QXn92eJ2LaaTvhPEuYjYqk3L8LZEPiYuuqSnQVb8JsK"
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

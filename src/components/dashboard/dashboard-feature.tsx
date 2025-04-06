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
    "3brm2kL6P1EjxBHtuzuCKNczNnLmmzKvSMxVxTTyoWTDr7smZYBKEqvn8RuTsHuPewcrm5cmSJh1bMsFF1oN1RNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mRkRv2gk3ovtzzGSXPUbWKewKQG6qzbsL82Jh8hEihsueZeidoamxzCBGDWiW9fFgMMpJbbzYup7tRvx7BCqFc1",
  "key1": "2bdBeQp3nYNGTsgzAjEaVz5bZUrCvTgYj83B1Pw26b6kDmmP8RFTWR5fCHFXmprv22W3XdKWigap6YNvfVd8RuDV",
  "key2": "5HNVADuX6kGCJvCXb177WP9wGjQhf78ZPLEEu5W7MfNsx9HsDfUVFZiGxik8ZpGLqCmWxDqp1qj2fULBP7XT9eSi",
  "key3": "5ikYWMGJBk2bAPSTmJEc46xKj7P7CsYPzwPUE3PYjW9mVTeEdnGZeUgjkFF72TDwrh8E64JBCPaw1cYPDehpGkrt",
  "key4": "dsdpiqGkW8kNnmQQnC2zW4kU4ARpMqBkSQAV9sDS7KsTsLrGMeJt8d6rPa9dePwkuHEmoF7WbhaTEPHRApFQvD7",
  "key5": "4XBkeDPKzCsFdK86fbExjtrozGWuKLZBxBK7XKKspX64uZXhFhi17WrxzuL7r1Qk51g7voH5DHiQ2QTZRZaU81Bj",
  "key6": "RwdugG59E3BAxrWdzXUWFVztGdczJsa31avrpeeVEymPrkKhQbNhDVJdwApM4K8uDUhDGKFrinokeYzwfQszy2s",
  "key7": "4SLQuKTVXwSQBk3w9h8rVjDiZEMbHFa3x7nkLTWnZgXvp5Gyf4oYUhEcgQiMiLRK1uf8zLMnjihQ2t2FjaiXVTzC",
  "key8": "5FjBGnT3p629Kiwqi4nFos23cf3bHsiwWd6F7MVHXyuft7WWFaWRXECjjc6F28xWEaLcaZoTU9zn3EQYQTyKTACH",
  "key9": "2dg7xFs7VziY4HniLH424TzNy7AGABNKjH9dKf5XpmgAui5qcnz9h5965nxXX11cSBmqnqh81UG65ua8hhkE2Fec",
  "key10": "4zRkcmBhXUPK8hqYEC96WCN4FeUMEQEKrrk215ejo45qzxxRRhSKtW7omsGadTHTt1JrHRDtWue1FXUzE2KxMTXE",
  "key11": "2F6YBzrjmt6m1NEvY9xZBXFpt7NRVh9NKaDRbdKkFPjU6GJkxuySRbCh3LxA9ndT5x9JJr94XWiNw3abc6FdGpQ8",
  "key12": "4xtZhwwpwHPRJ3DcEdLX9fc5958PeYvWNRgVGumCfJyWyUGsr3mwuRbF5aW1G9LZKyzY2Ve2QDc6GB7wJkuBhPwT",
  "key13": "62Ddc6sfxWHxmLBCVEAHxF28UfuxZ6MkeDBzyFSFEwsfikL84j5FDS3TcsEpv2tVTzvxdZPXxHQ2AM1hhT8Bi17y",
  "key14": "2eiUzQLMhF7mRDwM1PJd23Z6eXoBqTxaiAuT9SU9yc3GqJaTNU5z9smsCmD8UsMtbK4nLxr9gkSKdo58Zv4cFBoB",
  "key15": "3344veSgCTwd6jeEgWSVaicDXz16Yj9aMwnCQKgHWAiqUDpQy6SmWcAnBumwJkSd1azp4H5Z7p9oSLQNfMkPGCBr",
  "key16": "2x3LGa2ASNwmXJBPDJ83VbHpigLttop2gGxn8AtHLGLXYTRQpvyFkeugnXqrNGpJ7AHueVjMKna151yk79hzaDkE",
  "key17": "2rwTHf3azbmKsA9VCTrchoiTru6YczCef3W7RjBfNBqjqTV2QvRFEZWtRtg2fzodFHjt89PXAAfDDsHDMZ7uu1Yu",
  "key18": "5ciUUUJihprZU8pNzCNK3ZCkKn2r9HFmwFXR5o2PZRwFU8CPkmavw2oAb2wzWdWFW4DuJDSdZphAz71Szq1Ac8Nh",
  "key19": "2KiTeptZqpR55fwUapPdwv8yyYo22iqVW7Nyi8S6XF71kN6FEvpDSaRkxAEfpnsVsCDAC6kGJFY3sczJQ4fNMyzz",
  "key20": "Zs2W6DjruBoZpX5AjyVr2EayG9FGTUVwWLbUeGjjDj6VCAeYn2UhHg8e9ztcd5detBkSR5Nw1VeNFVqhidgjtue",
  "key21": "4tUDdh9RuHkhgoYw4QsKURU5g4DomTg9EZXuPhhRCuqyvuUKpEL16u3Lk7kMDPGFN2uAQ13JpJWw9aTMCS5NFgr3",
  "key22": "3kZu48DTQkf5X7qPaASTYJGNmewFDcxhmJLcoBd8BU2rJ2rteT7PxP7BsLGg3Hvi2qfGUg35eMCM1xK4t68QrKeo",
  "key23": "2LxyMbyh2aX43ffxjb8SCVxnntxGf3QjNcoq8aEHhCbQJuGqQFjbyWPUco2yanJ7CiRBX9gWZeYp7GTS1MMJttcz",
  "key24": "2EzNeHz6QHX8vFhahQT1eqwD5YGyMYJ8D27H3jbmgS31zWzJXC3eeTMYkZhDhbi4cP7wB2BiWh5BJkACYkwg6EHk",
  "key25": "21oL38Uz4tXDAx6MH2iKPHSQtD9kCNwCmNLTJXZ4qvEpKxC4tHnq8tnAnLx7rLuNHmL6y5JxkBX1Ab4EerXzbun2",
  "key26": "4GWFeidnbndGK6W6fFUL6wNkNbsmuPDNRXmfNJz5qLdy4wbuKnaD7c8M7PVZC5zxTsZEMmoUqZNCb6BdueLqZh5J",
  "key27": "27TUQb3xd7KS9E5QAs49Lmq6CNQKTSQV8vtCu3D6PjbnvaZ1PK5sueAX7QpVLe7igL9xymMocC8WiKw5RoVPrHKi",
  "key28": "3RQEEuXNQcmNCTMLhuagwUDzqaUiddLatzGCLq8L221n3CvUrAYNvws3PpspKwArpSebHRJikhFe6WajxrNZTVDb",
  "key29": "Ym1QXu33zF47ctVVpcJbJCHJYg4T3hySWbDhJK23E44WD6wfUyCPDksfmYjLiiNRpKFS15eZvXh1KJSRj7tcQLP",
  "key30": "5ZRbhrtVyy9N8qzuVk1vxdXhHN5Ai3xg5sEYJ2SnNNdzjhEXKssc6UF2Ko5Z2cD9osJWYoovTWGmRqBEYk5Tiinf",
  "key31": "2kVZbZCE5Ag35CQdfFemvMk35w9UXhibCpRL9eJviKBg9vxQyCJQxNWGw3CvYf7mfRY5JAFiJ66DVQAsbLFJBMuw",
  "key32": "47DLHdRW6Z7LAh9AKecjDRTYspc8adz3uUprv9wiLGxSY3cHJuTuEW5GVt3fpnRDaNNZVqJEwBdWK5ijJzhp3NRK",
  "key33": "416sGUBE9TkbBJn8RbMuxfLV6pvyAKYLbzATpW8XrsihR22zPV1jf4epV4SrmNRQTLfgLPE9ZAYPNvHBgh1G6FnL",
  "key34": "4QtDbXsJtr5XXACsMuBGbB1gNBtpeKtSVUemnqgoNkwSfxhespXu12dEUa9RPFhPUTYxCBrBNTtQRdrRaMDF7Ln",
  "key35": "48rZYBWdPCnVLbCbcmuU4dpYnPguY8RmkV2ipSnpd7oCU4jMwRSWeNmNCvKJy3fcTpLDvUbDXfFvg1vz4toXSyy2",
  "key36": "56CQnhE2KVqPqwz5XKFckzo9Rj5D851VbHE8wnziUyJmLv2sqGbApZjjxx2UPM3w8sMCTWjddzmQELvQLLd9L2zf",
  "key37": "4iVf9QgCwGGffBfX1g6EvkUT8qEkmbLkPEajKtu2UqZum2o82HQGgJ3XpnQbAHvythBRBMx9F7KruNzPNDTxUAcM",
  "key38": "2jEdfAqa7TwsVwvvzG9UVrdieNXtJB4kqHPf7XZAHPrELTB1GVx4qw2JDPiMxbitHftaWwq946ZC18ZG41Xaobuq",
  "key39": "339TGZR1x7EnXMhJ6Wo4i73EArPX8yj7hyuBTMLkKFJSWay9gmMztBuC8aZEQaMRjDAcBbgyiuUwC3CMisVH7W3Q",
  "key40": "4qUvjp7L9UiKGWdUbCohY6atdsysHvzXH2rVL5LSxTQNQ2FBPSY6SNnL4uCzkkArG6pTgw1d1G5Hpd8BqXBbPPux",
  "key41": "xgE8ngJnZySZQNQqibs6BJEUMoRcEKPYH67dTNA5d7TccoCB5Tyk3xzGdDN8hP4uGfRZ2Za6MV9Aw58UhriNsv3",
  "key42": "3ui5Noo2SL5ijp8Mb5oh97Nm83BxiukGp9y6YgSsMcpytCuenrtysRqqsuFpxPVGopi4UFRnjcSfCpbtU1Qd4Cfz",
  "key43": "3yLTeKGR6gRg2jDSpFRNH4WGNTWFuYdTvR57hb9MY5RNGha9c7cxsHCLybMW8ptdtx6Lp9XZaZikmKBd7u6L7g73",
  "key44": "64snfupJZr8m6XACNBHNjoPY6AK76g7aTXN8kHHVZiop1ocQxfAwHbYXhAbDCiRMTXTJnTVvzFdjcX6TmEi5bcFv",
  "key45": "2rTQ6giDcZ885RvfGafFSDH7rEFixoFXxq29bHdgjXXfHpX5whcyyVuoQuXYaD572BCnrhxhSKV2yVc1UTjZVRwH",
  "key46": "BCDw9XwG631ek5B4VgZRio7MPat97FuBpR1BVmiGJgxmZEmpg2HpkUCjQtwPrBdxwtmgmrDCMBEFyu73ZaBSdi7",
  "key47": "3Cdd76NRJKHMouZshU2gh3cEvWKydAtfDJeCN7uk8iwSE36rmWs4h8roJZBH4SaQkiXoNVmyKodJA6hWigh78PUX",
  "key48": "21rsHgNyjCkucAEQStwbKyQAW9PjK6FHZ2FEw8r2p3Npwyzav9iktuaBfTotBQ57LR6fLHR7kFawfzb8GS7FGztu"
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

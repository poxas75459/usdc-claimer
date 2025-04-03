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
    "4z4KyhsYYeYVsvRNR2VeEvvAWbNfBoBXZKieh3iC1rci3hTeLEUtLtghJsN28CCnS5ixNnUdyaefsUupyF3UsS22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AtzYdNnB19dqZ2777SwxXHtgAziYzb6aRMHs1tZQNq8z6wTyB4Ru7se2qYrqKoujWmCxYYaDHmkRZTb4aJYLC1x",
  "key1": "5pj4dV22ntq7w8onQQaYQA618YRgyW7NUAaFaA5rR9ndoxHtv5T9uJzB8MnXPa8wuXu8pzXVkBssmKoVAF1E6jZY",
  "key2": "WpmNEePCkspdUBSoxNRMAuuRrLCkiWbu99tYiCYDqLExhPPmyP2zh1EsX6qX75AaqoRAampEmLRBxKnBZAE1TMK",
  "key3": "2pYEELDaYv9rRjxcv3VKSkzP3RWeWnrzv1Vmf37wo8b8nTVx9HXwbRJzbVMCsZbALJMV8yuhQfqdom3RAP1VsEAh",
  "key4": "5LY19vhPzQAMsx3uCZcfVAbhpRRPUURJgxQftyi53TvMG2bxpmPrggeK1ympv85Towwq8anUgpgzxnrJBV5e2ti2",
  "key5": "xbHkH5Y6rGqC2DGicB2QWtcGDTYxgNQHnyNKKHr7gp5WMk1pur8wqHmPkKxphmoVwW1ZXfdDbw23GxPAU3p1nDS",
  "key6": "4zovAcm3jUtAug3u3fN4Dy81dprcHj3z9xfNKjE9smiktXq1pNCwSQJPTqM83nrDZz5DAeMhsu1fsQ15GbGUsEA4",
  "key7": "3WWKWZ8UxVFjxpXAu8DpCHoRjez4mvwN8WriBh6xsXqmU4CADK1KegGqXa1UGKtHTdKJdM1QjMU4V33yrMw2apdS",
  "key8": "4rw5SqqpUDP4KLYbGSUeFXYe1pscfrNUbbTUeuWE1QXbGwMauvKzQQWEAPGrDxgwVYS1LB8xUDg9XTEpsSArUzdB",
  "key9": "5VGeAkcCBXcD9e762NXL1LmBpmCY82rX4Ryz8ykvTZJALdT46UY5cxuFbXL6TDN2BpAbRDUpfqKg4ZT1exLi2PkJ",
  "key10": "XxLrpz1Kc5QKb1aTvaisKuyzrEaF1ZS2K8QDo41HAsJ1fy2c4jXN56SQpmQkoUN1ygZFaKQ7cVc9yutwR4Xc3Pc",
  "key11": "2WZwXJzdwAJJuHrmL2Eo6i2BwGdL5s8zKzvzULTMxRodXKjth7BYqppRm38wH4qcBr9oiBXdhgDtkCDAHV2ApfWq",
  "key12": "3Mowhm9nukU6mD1QYjwWXGYYgKQXZ9QTTyrRRjkzcqwTUEiSPGjTzGsp4AivLiusSmbVbQYv5KRtjgnwgoRtEeqC",
  "key13": "2uFH64QGJMi9oxFdbBvUB8rFwrxSwxFWH7yhhjCi8wNhowW1t87GFhwiKmwXgysY8ucoa19Qabm8vzySBqb2Bn47",
  "key14": "3Ys1nhLjS7kyAnBFWFVaAdRqeHjbphR2siwoMXjEkeeWT8iF4B4B73eN7wTPssA5dpQ54r9C4Nwh6Apppvrgxk7Z",
  "key15": "2p8py8yUfZFFiR1SdPZfmYdwrPmsCLK3ynajKoHEnDNRAFyam62QXnXvPYnRunqj7tSY2dNYYiwo2G95RCwUTMDW",
  "key16": "4xMf1dDrcVV6hNKSNGLpgJwNXXYbpcEx5ateKYuxjPgesUkqL576vGeFMEa86F2G9QatTuhzsSD5vADJ7Ykj6nr9",
  "key17": "3UA9KgJ5DS7ujTu1Af2Dz72Yne2hhXZhG3kMrgRrhszqpDTjamHwRtqyMFMtCXWpVdPWq8ZND6LPFyczYav9Wmoe",
  "key18": "5YYNPpDDVWXjdUmTYAsUrrB9Sk9X2DXFjEVhfMay9M2zSBtS6ZqyRK3bhx5mfDYDCowGMohct7Hcpc8JSGGLGarX",
  "key19": "63a1zrY1gmwcywKgqkLvHDPhgxNNNjnz4n8ijJc5f31VpU9riHRwqmb5CU91tFmauW18AuWEmaVM2uKhBiXPZVWo",
  "key20": "3S43KFYd9aeJTCXcUGS3a49nAoUQ1qffN19bxijDnmXUFUJueBAuTxfFWa38kDFRR7ikKJoizj27o2cY3jq5Xcbt",
  "key21": "5prtSWBbPCJhXpKQFRhCYSfSn7PsxquJtaHyYxU8UvcqUnMWjS8R5kejVDCt3726LMoheSqdexwFk5piSWdTgUEg",
  "key22": "5y8WtkeKamJgvKiBPnqjR2K4pkGCc6z1StAXcrzapMcM9ZuiVViVd4E44aiXArZDmecoLvpfACqHmEvNnhNzBMaw",
  "key23": "2P3N9vD3RoQ6SS9zrVfit1XiYhDkb5YEV7kznHp7mjQAbZMN6UE94ZBPpfXr3r7xmk7zNsS6QDeKCEQrGeP7iCmt",
  "key24": "4sCKJ4Gh1z4Pkgn47b32niXyFzffod9MXmWH3pwx1MXSD5myQtdf1jpVkRiMC6ke6CgpSP5xrXUsibNfEWRXuMAt",
  "key25": "2bfijN3xQKbLTmwdJA7DsUZk5zs8kxUfCoi6YRVFTrScwi8EsZ3Y9ujffZCduNLdVauVQzsLmUirR9BdWBhtPSXP",
  "key26": "fzKpkMq87xEHARyFZyV3EJCceJ3qeZgfMwTi8mx9gZc5fmQ3HHqU3HwNMqy7XZAMhjDEnNtvyjkTN6R4Bjb6a4d",
  "key27": "1262NEH2RqDE5xd3Zq354PskPsVhk7j7uvYKzkf7cMAj4G1MgX16WtMPVsrCVy14zqGZcGYJjsHNpcbwuXR6gtoB",
  "key28": "4nRK7nTKHBWqTeKr9HUPmBRr6fAJcDMEoyguTd5HzBpx7t5bUMsbSuNqvYSoSURHVmumtFPLSXdv9iNVkM3hoKNE",
  "key29": "BcutN4uffcdj1EyMdNNupGPaKcwdcbQYmQNoa6mfJ7uEgL9W1ZG7D56SFxMWHjRUzVnsbA3jQbGEkK47jDxpisZ",
  "key30": "45RN6rK6DpUkiuueNatU2UFe6wUf5jmt9aDi7kgwFaNi2DoL1TN99aBnnaquxuBaLK16cDZ2MTSLVST5ZcqehXWu",
  "key31": "GPrSo7S4Cs3VeRtE8C1ovHwVuJNnxjowCiJ64PwsjRbxd49JhpsKTen1vfCbroYcT3whcHVwidpsQNqiNksneB8",
  "key32": "62UqP93U33YtdsdQZjPewYEaDKEHTWmiC7BsgBWX9RdagP2gVVGNNFoyLKTCsPWX5rpvMuzyayXtedjNtEfiGDLV",
  "key33": "2W4rjrCqPwBHubcfxdSnpAu5tzq8CwjfEQYebmURCUkKnjQjj4rB3P25LpwoQx7ATRqHg1TRZVqeuU3F2CUAWCrQ",
  "key34": "2mmpCn1ZFcpYAuwv5cizqaRWJNGDx1ou68CKcRLNDyG5pGfLG1WCgyoxJ8UPzvhkebYj9jTYc4RzvQRLbs1axHKf",
  "key35": "2dg6Dr5TeDsd331XmcvrzmxWcsPe9uNpL3j8squZY7sG6agyM9ctJ4Q3HcDh2psTGN7STMTZjwc5i7YM1wCDS8bN",
  "key36": "231nzt9XEffuA2wDAGrhcB1dLkHxwcWERUNzprMcmnryu5KRi6qXDsNpKhETdbSwUicp7SgQGYEzkHdozzK77y4E",
  "key37": "47vDysQ7Nap7JhYPec1sUgdWZcdQD19J1HUAGAAFgn9mLpRKT1PuTTNrwpzwh4jJhjC4PMf81yredrrQPy51r99D",
  "key38": "42P9PWupD1XLQqv9dWLwsKamp6chC4wrStEFGyBvfBc2R6bxU2oKZ1aZ4SKN5prBGcKxqWhiF9t1gjHTbco9hSnB",
  "key39": "33K1nMFwC1L4WK3jCzy52hZkSFRNSeNY96czrU1uBbN2MLr31oW2a82BHkpPuc3xs8jFoD7DNsRZD2s4BsjXUuoN"
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

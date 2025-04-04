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
    "81K2RaJ93Tpgbntm2TJ1c7yCXCwdNRjqCFbiKVRFGze1kAZBxyCBXjaLZgq2biafku9DYAEeh5fj5ptk4n5JHLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LnuoSzuzt7vWDccGNUU4MEdrDs58XNE94t4wHc2pLpKXpNEUWxaGPi4V5vErhBUhaAavSJtMGytBcmdowPxGd9E",
  "key1": "mbKFMJFKiw5QYUJo2cGUBC7jsaCP4pRepba4cZr9psDtqGYPfdAVWQXFndfaAm5qjAYfZWmiByVw7BdiZ9kbSAx",
  "key2": "267J8WyhCifK2wuFFTmeERuftc9gRiwDr4Ym1UsTPTynZ3VkDg2Dj5heNCADARi9DT4dB7SQ8HmATE5T3UFNcYcE",
  "key3": "2hcoz154wpXKc1EzwPMRCchQ4MSqyob5HA6Gt5fjmN56eWq5DExRjgwBuqL5YnZAG8yj6Av35bRpLpZKtQBSiRAk",
  "key4": "45svTeCtDkqaQrG9TJM1v1AevMHFdr2up7R2ajEJ68kkC2rQikYFBqBVaSW2Wanng4yU9nZKJhV7KPwDFQcT6C9P",
  "key5": "4ub5hwCp57uivGkC7Fa8tjtrLZiHixxJk6HpsLehCH5sinb9Py7CS4pNZDwbVdLwrpo58iG16z2MXa4fjugUxny8",
  "key6": "FHMy9SUF6Nj9yy4nPGmE7KLPJyF6YVG5U37xoVDVyFupSdchs44WJSMMLto5dFMcZBp6Sag6NXdFTpY39F1ETPv",
  "key7": "4ka5hj2SD499WJAgTkixm8suCKKFL4quGCChCKbUkBTr78HY3hvHBcp8AEyenEVUF6xFwgAtixFZwqrsoPqWDEKm",
  "key8": "5PxkMQFWDvRvEJCrzxMP5V8sZn1vgptGg84M6YZShiE964e6e2ChuV4qJnzECXT82ez8kn8pK7L1MA1vQNikv9BB",
  "key9": "3SnmstCU1DrQWKhMPGfXReFEedhbr3dFGJhZWd2m3jPqAPFzca7oQRm62zkVvzZckrywBFRWRtLSFdfwa2XABZm",
  "key10": "BuZ6DSuLtHzjJDeXVWf5CuAMR6PbpJyCnaRjhqc3RWPs7jLyzDuKtf2ohkwoboXMyHFxvZBMZvjFm8jGYC17r51",
  "key11": "63uz7jv25AqgXnkj4bGs62iapSHCzrR2SpjThMRGzECnMXt78PkPEMU1CpwqbyxDPEMmy3iaHi3NE7P78cSrZ44A",
  "key12": "2X4A8oBbePYb5E1mgk5hnaDkvb2ZB8dwyYEaPExT5JLJXpwUZaUiDu6WzUPoeYLo5R5aMDwnyoVvL44Mi24KMgcE",
  "key13": "RS9LZcDiZZKpuMe5ty7SjNEGDitejDd5sPjNg6LN4TwN95F9NFcgCjrLnDRyAFZuoKcoNDkdK3NinUXxannwaWv",
  "key14": "4ea8wTYDDUY2X7iVP1c48CR6ui4SxduwLxa9uAyWZNssK8si3BcPgpZgLyDh1F2EmQJyndfTMYCbXK8pj4btQYBf",
  "key15": "4emHsnYUWmxpFbuoAtdriYy1cuwnEr14u6BUsSAds8Up455rMckoQQiah4kJUbdpEj9SPJDSknWW8mFGsJSC79fU",
  "key16": "2cKCiewTyRbVMaYV888oj6AmUDPnnRp18kSo1CeUYkRDWUJXMopzU6C1GoW3U6LcrYr4dik1ZQN529VERCwNm59e",
  "key17": "4vsXjRiBZs51SNPLSEC8BYxP1HWSeGGHfYFaxkLAQuuh94si7pM8jVZQGdHsT7rES9DCcHjqinNm2VVERJW2fP83",
  "key18": "2HLgHTuXuneD1DTCaAE7VD7ePD162B52dACSg3pc2j5naMiy8uS79D4NKBHyahNcKr4ZDXBFhQEmehmzqfSupPrc",
  "key19": "5gBp3UCJua4DqNTzYH1U6MTt9RdriQAqVGNcqDRVMh1qw3inkPDnRjp3dMwNZPPSfSB3LnsHhfHPfj4Ko6pFnQYc",
  "key20": "3Ga9cjHSaNGNWXSPdVoD5CVV2JcCjHvw9bHysb1YAoMBLPARNbEWf4B5VAebZg69WTmgeYyiY8anNwKJd6NwwB1s",
  "key21": "2x5cvcFx1m1xt1LCgxwqVVeTVQ3cBUhQMdRRwR3VzcsGWagHD8gTyDYRw2ibDYG1QcQ8pQm3ekWdaXBWQqiyTnPQ",
  "key22": "3cNdPUb781W6uxj7RRTMAcMphtdXvhDuFarnZ5mrNLhqRjvRXgFaYNZ9A3m7a1rgtrUzyRherJXyzG9BKHw6oTfR",
  "key23": "61Yzz6xi3avUUrXvvhmks5ombVE1La9c21XMp79ebnw2Qar4YSPyD8Euz6WugMu2b333rmRWLvexxMyjHtvJDBjY",
  "key24": "5yjRTGZzy1ELNfMvZLHmjdeqbDhopBNkeDFm1f9uazmWLvVDA9vR7ckzt4rNz6eHoNj9TF2isnt3iCEgDnyR1tRH",
  "key25": "2CmfqK5VMxoNS8J7mgV3MUvbeD5rhEj6htg1of8yktwcSyqLsu7khikR81BzqkusBM6RA7Nt23ULJ4uKnZadTxri",
  "key26": "5k6zMac2XupigoPTceH63fM64ZHQAJT4iuCHKtnjfWvyDe2Hu1yB46A2yQ7oRU3Yvd5QfMV4WocaMSphrRDx5kAF",
  "key27": "2zE4KeMEEJanjxmiAKU5HNAZRycxzr1PqmpkDCtJVLNypmXH9sFZcjKKVmBPPr81G82iB5JDKc8RB3f6WXGfJZ8z",
  "key28": "2Ez1VkEAAym4UcdCU5XWF24TgUsoaodNZ5DVUo9vodi1MfZkgn2kdG9k58crx5xYdcRCrcDSdUDi5Bt7aE1HJR61",
  "key29": "3czD7giVnByueev6AtK1ky3yLdZYk9D8S5MvshupWPXyVL721hjMaNPC4nwhuSYkFmwF7Yrik7N7nqY7z6gG197F",
  "key30": "3qd1nJ7T7ZziL8Qg6qEN97zreGShdZGKXheKUvFEEe44enzAoBss828wBorz3stvzLp32RxtTvauzWTyA6mfFCW7",
  "key31": "ht5gtaBHPHE3NuF1KLixmyrpT17rAzinhBuLosgQAAhczp3CUysJfJyvsvS3pYt7jiRifS6Cnb9sUxSMTm4BofM",
  "key32": "2C6A2NVNgxRuDeDNEreVVKRgvUGJ8WeHR9eRpp9RJxFTmqpV2uWQ9ev3f4HNXSmpCngGg6bLXtkD6K6dZigsmvkh",
  "key33": "2LpCYiS6KM9vzY4mSM9jeRp4bDK9soNrXsrfdUmmH4pCB9BS52sJNHotq7uNArzsosSTDQFvwVgqUvV4Ez9uqEWG",
  "key34": "36cepJ8a4T12ByrdUSH3bRk793NNGzD7gS5ASEfG2UC67oQjZgbK6Tznc3jLabrVMX6BTgd9w9KiQLquFNDtRVUo",
  "key35": "3veQXPcrBNetZ1dBAv2ZsbsiPN9WzUbKkizEybpaEYiutJ8qmjPSpbsjL4rwFAHjg5poRyhcdsQm6uggHMbFx5Nm"
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

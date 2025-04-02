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
    "3MZ2S8QcZ5NGfsNYrxZs3aDPge8pyr71WZnP6fH6WNPoSoKddeak8xdbgG3EkEGxobtdjA6uVLYs7CFAcDSWJB65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HMizg5YNGgYL2Jk9oDcHQG87s8JkDRE9qkL12gdn11yB9eBkWLurzBpDzxwxUHPesLdjk6deWbJqNpAuErfQdJk",
  "key1": "3FmtYJnFDbtTJ4tncF7XssGksLRwc7BQc3jnaQSQGgfC2U3mNAg9ytdK1Y7SzGgLqoBU5b7BsJi6ChuFYiwM5YaR",
  "key2": "4CMntmNhrs3Ws5QmrVkukPVcifpDKLAwwS8xHQJ3ExnDquBUQFaCAoZFg2p6BMQ8YRcbeiJLnHXayXkSjtixEQSA",
  "key3": "29R2LcEd9YLmM6svZWvmjNgXqEBdscUzGAywyaeSCefUyQY55WmKywWhbxEV2zzFqKQuAQGDVbxii1sifW8iA3S9",
  "key4": "gMhtaFHxDDbiDkYr7VLPGNHyiNCdh2Vch3Sb2EQm8xFsTYuUFkHpBCQ1LWyJcWa9CG2coZfAvxCHQBBUJ5TcxTn",
  "key5": "4WfVXQrMZ5SatCZJP1DMPvtNgJa42rguX5cMpfxog8zYUp9zvTk2MLfmchj2av1htEhgBQFfUkBqmev3DzGm4gFW",
  "key6": "D7ECV8R2DHKW3FiC6H3CBH4NLrKtpJeLnYJviwkaX4YL11Qc8vXcHNrraJjtDi6bHT6u3U13pUeWekMAhoKFSoH",
  "key7": "wTd3PMEWaw6CU6ooeBCjthrUGaKMNBz4fwkYz3jAvuyvKfJxC5SpAgUL2aMgMk1A1TFr4YxXrPPWL8LS4Hnb25r",
  "key8": "HY74iR6BWUKKaCqE9ydLkJm1Lsbe5n49ezaTv7B38Jsnp4HCoQCXgtcyvFrxkLhR2cPZuXXFAhZLHJd1UEceujm",
  "key9": "43PtCnF9WiGmwZ3MaKfSUmc2tKX8AjTTqt8sKFeD4WkfqQFnxiwYXs8i65aLdQLCGn3drxq9xdDxpu1x1PkSmtVt",
  "key10": "Amgsh54prkarj1GiqRNbpSUZL9vVFz2d1NvQVm4RRkSsPaSgjmwQP161rM7TVD94oQX3MffU5D3LZ9onJ6kdsuc",
  "key11": "3NHwcBUouQV9e4VxxN7s28cDphuaoTweazNX2xwccViYoecJrMRKQT7cQ5TKZznvfK8rrXuafM3NJCngf8nUw3Pb",
  "key12": "3gbyTCPiSGUcZqceXZfyv3jTrBSbDJBtTChX5koYL2Cqv7FtMMVeFdY7BE8fdPKTtkHpePnrQCk3CfjoWh6bRH3r",
  "key13": "CGHP28kkEYhhFP7y4jqTJADXT8TL4FXUf55EBEef3UNQHpiNAB8X1Q7GqttDaiz6yPEVru7vsHKM4Uqgiwui1Da",
  "key14": "5XpzXEFWeGm1AcfyZsN7c8V7UeodS3Xh4ENrBLY5qPm1HPj9AjeJSuF5Q3VEfhWRCKaFYqMuM2QijKXs6Zi6Y5HF",
  "key15": "57GWkJZbdVkwDi2Kry5t6hTXcM7VZzkAiLNdzEnMYigcdC4G79Rrkkjc8CcPkGSk5RDSPtEbggF1UrE4boS7n1HZ",
  "key16": "o3k5jdoSPaX6E5iYy1bksUJZcJ44w5bAAwvfXSPVqWhwxHtWL6aZ4VsN45WsHCCZBuiBY9rHRUwPPzNRaMMwa1P",
  "key17": "py8Z5LUBp8P3pKL4qvbQhnftkdNG1pJfe1cwcLfo9uGEM7ePtZ6uZjGNiKT94qjUs16D4khYY9dNEtAinABdNV1",
  "key18": "5cy1fwNb95ouGRcSb1XA26R6mon4KVzQdAtVu94Qi3vvB8uEPojybbEZxTG2qSfoAcCUPeHqQQbPsXUHfcyM8ngb",
  "key19": "5m3r8fWpavCZqunbAT9DCjAsPFKsef2EaopbLFSmwopvxoCfi1XcdwwE3U8WatWVYtrFbae6ShvaMZAT29eWvk5S",
  "key20": "mUAXx2nHKJrzmm87r2bV44gTKQRLh9bXhKiRBi75wTCJcdq1ETt6DbCNiL1BGA7jb1y8if2wuAT2k36oNyFRAn3",
  "key21": "9K4ryowuoSfXMeCTMmZGxMP2HJizAvXFd9rbgKPrgmUSzVBgnFZGeFoSFw8hLEeXfRqyAJPKYpmtpE6xTwTCAFC",
  "key22": "1qBV8Vvq51rjibZ5QdPGErxH2zME2FUQ1HcwvGddu5kqwYgBTdJWgzeHxL1qmCfS1iHoHdFymPY3HcPQuH576XU",
  "key23": "3dQdcyDB4UPKvSGLEWN3d7kwReHeEVG6MU1UYc8ESUbAjSpnt9yjf1we3m4LxUDmpLAH74scDbgJMU532sz8sj9g",
  "key24": "V7gUvTJfkvrkWS9TMouG1wowYgAun6WfhtQmpcfWGDYX4VS8oafBj143DKXuFNEhYiJrmEmDsWpBN4JtQfdjXhN",
  "key25": "2mC5GuKWcCdPjTePuSxAU6bFoRCeF8pkkEpZ3ujPAivGBdhFD4u4yuG7MBFhH8qwtup2W78oQstPiUFR4JJ84F4Q",
  "key26": "3mSCmHdTG1qqoGSQ5VwthFTwpzuckJNiFbzusbJgRvvW8nB1oCC4Ptv9iV2oc6vmZgxHqLG5HcWVqZa94SykP33H",
  "key27": "4nt8vw3nSCfKTRrUysYXCUMUWGxazUXp5yVoxo6EgbGQTqJKVE2E4CoU9kcDVABoyQZ2x1YTv7HFxgeQUUm5AoXz",
  "key28": "5MTLDkd7jMRg8BU31nRqSAoowm7Wtiun4qZGF9Zu1nvKzN2pbwrH6c91ZwzjJbNY3nscD2mVbDmFSp96LV5agaCG",
  "key29": "nFVWZVjZPfmF9tF9Ey3xT1mG4ZFJhuGjG4bngmhfRKmN4hQJ4ZgbNqdgrrj7tri3cj8fvk4fe4W9VdyXunpPh4U",
  "key30": "594pCqm3WtPTDzGHRwwkyrYLRq5z8n4danhJ7adMYLQdEamPKZANjHBUy1fdF1ybHvEbpMj4K981Wg3aDwoYiQt8"
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

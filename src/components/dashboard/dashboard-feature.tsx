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
    "2zbdY2C3FgSjG1VZqVbsTrDCtfX1DjQjxGAwCeeQAj3qiSzesnYjRbfhmFRxiyepQK5pqgD2k6bvuS6Y3fHMECdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgyTP65Qh85SESvm3EFegDKDsHrts9p1DjxcccBA4qhEvC1i2YeYq3Az9oaEVutnbfmUrNqHaZLyozAMkC3fXyz",
  "key1": "4wC2VLfhNCxfzhmbmXPPVx5e2jeDKEffV2bkL5ZFbS6EQXW5kvMyz9zvMdAkHa8WNaePq4zqg9TrqCSNYFsvSQ4E",
  "key2": "7HVwagSy3R1qGFSEfQJ5LhGd9XkNALuR29xbMVreHrMZ2QZ1fCS1oE47tB8hwZx4hCVk8uxwa43CJJEpZqaxmRz",
  "key3": "54USQPmhHAPEx26Yg9pfH1hTMcm1BrKV9VXGixujx6NFcxrGsL6V9Em26x7B2YYXR2xe9T3Xt3FCBFYLyaKxLmBe",
  "key4": "5W7vz5PkvTCXYMaRKby3G3mL2mAfeUqmjYaWEqDweDJqtf3qYKqdDccBAfWXaZGJCmQpVPuQ2gNB5cnmwXDYQHsm",
  "key5": "5qMsAximivEq1CYVcGr3UBVPLzn1H6RCrwPscmWV8f1K8YkErHhsbhYRNBWFh3tq3YQzbaa34PJ5rWWApuv3V5XH",
  "key6": "31wMX7tiEw4zSgBChQ5itzqSfp4bRVoWnMyUMstMjuHNGaopTEcdjKw8pzhtajLEgyp5Y7wb7uW38W8FkqFArphB",
  "key7": "3jk4JjdZ3exjAvFUNenn4AZsnb1yj8hTnAAE6Jv3dJVe3oEvx127RsAVDt1CVebvRj1vkBiyTpuHSgm1gq95k51z",
  "key8": "QXaxUPpKNFJXaGkxAXcdSEWe5EukyuS9HpRukgEitEKUZPrv7653crpxGthhBoW8Sfpr3RuCQcYLoVtTyvWSyAs",
  "key9": "3F5DTErRcYFhjrTRLwtLNZgGp43A5vnCkvN3xeecj5f6uJaUZofqkZGuWH6fPW2LD9TA78N3gkM1VBWN3vmkE8gM",
  "key10": "3SrhCjz6rX8fQ94vzKVBCYNGufPepzymttFrj4iCak3WdyQvE7bcnis1MMnwJ1MSMz5KzTnbrDn5inbB7KDNL66F",
  "key11": "66VQYcFJwViJN9dkTQKcJKrjLvhEzqp84inzo2MFK3mej9sNioqdkri4cHvTzDJ4XVVrPMvdYsia9seCUxPdshw8",
  "key12": "3wMuwJnpjVoqHBxomgwbfZScqXv61F3Ny5GTEB96qryepCm9BsG5NHUf7jTPFyZcMWc7AzZ3LGQmrr5A5RKcjLW1",
  "key13": "5mBH8YrVPcV8NgYBT4MEco3kM56bfzEPjz283tu4gjV7uiZ1h4b4tvmQYUUHvryQmh2WnWsstd36KQ6P7obW1rUd",
  "key14": "5VcX3dLWqz64ceaoiPPaYdXbzdFKZaa6UayE2N4SbaGVB5ebxp27eP5wwnqx7askPou86SZq7HXZBFEdKEYVXXfW",
  "key15": "nRwGwgh1fuybMq4MBuBwmw1ZoSxB7Dob4dyF6Cwb7k16RhxpyCi39UsXpyLLL1MncUYtMK49731J7uK2ytTG1Tv",
  "key16": "5xkoYABHkrNDJSRYJ7TRJg6aXLhqu6CG2n5fW9L1P8ixq8X5ZPrtwdYLLcA24tVK3QHximM1NJ9PCFRrMRMPz59W",
  "key17": "3dC54oieTZDnddgZBGdxuzoNZXbFeJDD11iCgd45d4szMu42aZEr5KhFMiQHswQiv2Nuca5o6tEUKj7BZUBoALow",
  "key18": "2wkChAhCLXfaURR9WkPAFsAuyZszFchiyj1BgqjcVbomd9LpihSqDAPYkDwduXifw82ArikcqMQMeTpSQRFVdUuJ",
  "key19": "omDTxRe1pkqSWJerqwUB5dJTBc8xicWGtE8QPyBY6tYpomevFRbtZX5g7MJCZVA7bsYuAN5tHSFTaVSJDp2EQHD",
  "key20": "57JaTs6uJjyZviUYWoXgRFeLez9ZWfV6BfpPLRtVUSs7Pz7ZVqnUFtVJfZi9G6yGx3bCkU9tgXwaCXi3cDbUnKJE",
  "key21": "3Q62Rb9LchdPZfQ3W6p1iwX2oCjk1gagLgRENCYLS7A7TVCJDqtkLLFm56GwZ24gbtmTFwdkCt49HTTTnKAbCBgP",
  "key22": "5VE1RStjHSe2b45tQFTQh9Eerqm3asQAmkoJj9vg1DLNhFXt4ud9jD82Ve9kXxVTbRunmdT1nnsryab7Zr8VZdHY",
  "key23": "61VJFGiKk9brcNGptjyGeWSQ7W5eko9StFzR6dfaSDEzdoeZoDQDok8s4jqXgGW1GL4FDj5hd4AqmEWM9bFQMeni",
  "key24": "4ePy4ABAuov2kcEwLdhA4fh6Noz3hHJwz5qhG4jKKpvq2ywxeXmH526147tjY63CLwrrYtCMwpHYZVVyWWNYpECh",
  "key25": "rHn5qbc91w8Nmkqf3AmCd9HNe53ur4SVuP8myfwdmEwUhoZ42D5e8EUNm2ZK14gT7Zx6DwHHbATcxhEG6PLXm6q",
  "key26": "67E1NNsJ23fUEpzv383X5RMoRSP5aNAKWSKLwjBRDAchW8NaLFZPSBntYBFcF7D5XAJGNe7WYv63bPdgbEe1Qoiq",
  "key27": "19NRDpr6nVYn6t9yVCrYkvMfwVHNnWEQ8Lqcch8pKBf6aqB3pFc1V7cTvDA5XRJgjMEbQggM5F6x9VogDNhfj8M",
  "key28": "5271a2M6RwEQkzGS4pVnDZ2zfcCBzVphie7GNyBoziuL3taodNca4P7BYusnc2mSeo9jjbjPHwRxc8mnCaZLAQJe",
  "key29": "5RmNhuoqjX2i7yBVymN25ahjhHRDe9HMMp3DtpSb1csqqyppKARgGk8Sf3VfrTGDN16pneU12mwsJA1KWbVhzQA6",
  "key30": "3QWA3UUJb9JjbavJSuVsojY3QVrkb6QNXrgdY72yvLP9TrFbLmq9QwUUBXF66i57qaL8e4HmhNPSnh9oNqKLRfv6",
  "key31": "496t861cC5b6qAkrFUKiZYUdSCV7x1xczUzhmUCGFCZ1Yej5Br1xHy6rvnhJkg6kEEMurdbzJva7SouA5fVFcPi7",
  "key32": "3qPgvnzAzn7hMEQgjt4vQi9cNFAAu5aP3RcBJZueZwoTiNTAF3PoVMxfCCMAnc75wEfAA9ew6U4viddEqKCjas5f",
  "key33": "3PW9CN5qpk9GPWDbnpxpNVai9WsiGTKrHAp4ZnxQqou1eYRN6aSLAqKaKNUm93E2tXahybeoyekm2QvtNW68V7SE",
  "key34": "4DwrmrCzSSUmEQA3p19emaTfwf6tzC8p5ULJvav4qte3E3RyacrNzoPQhzcFsbj8iZ9FTNCZeLpwoPhtYFsRf1G5",
  "key35": "4cKFFGpGY9qATYd481iyUxeXwqSFrjvE3nuN85dDhLfdkexyNEApRpkPXK5nuzBiPSjX4izeTMyzzPP6ETpnN6F3",
  "key36": "RiCPK7PbatZJg4yRRPTkFABTiKpRMRDbsnQ8axV3Qz5tf7sdLPDiU793V4MsoqnLfE6nseJcJEYeEWn93escAxX",
  "key37": "2iCnYNQ2WfPzPvKfNKCmsvbDqxpCQNSoD3xBpi9mnN46uEG6iueqBqHxPVkFLoH39vu6XrAsHUBNb2tAsZFRzNxR"
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

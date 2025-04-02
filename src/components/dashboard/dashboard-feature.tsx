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
    "bwd9pFWP42umFxfJ1SEMY58XhuuZAzS6DB9Zjf6gHE3m2XTfFyAsjCqTr3DZXwqk3q5SCs669cHMXQ4uLfSBimQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3coJjYW62vFMPVzrFdCtKGUtKooBR8yTtvDieZNoB2UU1CTCcxnhWajVYb27pCFKgUkGBmjxFZZegY7uMZkGjFAj",
  "key1": "55hPoHLbi9w9iUiCdUcDmELEEmrMCP1XMowx7Vk7jdEy1vuhzukpCHZnPG4DAwik6hiQKPETPL5R9FkhmRh9vZPR",
  "key2": "3VTn3RfkdrS2JgyhNpEhm79ttYRxaXhjshmvG79HKhmHP3N5Tez5Y1rJ3vYcrb4yXmVJLgWwCtRCfMq4afAP9wXH",
  "key3": "5ZR6B56PSSKY64TeZGjNQ3x3VhnqgVi7DgQ1yRs5eKi3EvH8zyEwvQnGYKWgpjbM2qTzpPir14stv5w2U9aajeFs",
  "key4": "4JdJ2ynJQuhZpkzhTLqqjnmyxYp1TnDDRLZ1ZeJPBibvs1xt7dJsvcNfsMz2kgJzndVWDJV2LZpzefiF7bKDr6Yi",
  "key5": "5BX7bRm16EDhhRq2AduBd887P3CP8g1QmuwAwysuaDV4jUTvySueVBxrC1Da5yxfFEVnfk61eNoqUfscimT37GoZ",
  "key6": "5nzGFB4wnUGDTe6FSVzHSaRgjBG3FYGXpRh8rkTvTtheqrCxHd9qA3boHVE3JNeAxqUk1tBWGeK5E5F7kU5eJYDA",
  "key7": "37cn8jGjEcrQNYe74C3zVrpUbTebcCpT8suhtepTnPXC4tQiVtc7YA9u7zFRnf3oyPpNgraokGRkcQvxWHBzSaqS",
  "key8": "7Qtj1UrRkvypcvgzkRFJmx9DP5A8v5GiBzyGq51MaQ1vR8zpcAvxCmZVVWpnb67bzGhB9gT6rHKWbiFyXxNvahM",
  "key9": "5DMDRCFxi3u8ptpa3NzgFHxAUaXJgzer3YxvPvwKXoyiSkJ5AtQHoa9fkTSkx36bLAb1wFNQmww6A2Zrw1KVsxeZ",
  "key10": "4US2ef3v95hf86PsMxaTNos969wbq8L2rteZoRv4BDqVtDNyxwphngpB5GEWoD5wCkg5eybZ6MKcKcDJCHwm67kn",
  "key11": "4sKVSWfY7M4ceC6W9THtovM4hDgm75Rz87pmSZVBJgXenFfVB2Hwtt7dgzdtv4d497i9RyKtiHRuN7Sy6Fjj7FZD",
  "key12": "3asY5bRvy7iEi6dvmNJQZmJYVNYF3V3r8DsXFdTf2wD77zhK7MvMreXo31z55DrpcfPwnWdm73hTdB8Jho97CrG2",
  "key13": "3CbtfzoANzSiUiBqqCcY2cMHAWs6fR91UAKpvAKKep6j4xZbgGub8faABcqc4RVqJWXjsMNVvNzRkupE8vRrWYKb",
  "key14": "3bSCsKZPUjDwMLVpjTcTDYYYQoaSK6V1WeevebsvJcTaPgrfffDRL9MDcix24yD2Z7oP1pnVtseonQjo3mLiHXwq",
  "key15": "3gBvj2abak1qoD5KucoLT9KBt5ecuutkFL4b4zRTZX4w6WP5tzNuTHLPqzoe4ha1FjLTZ39ZDWruWNgLZVEEhXpV",
  "key16": "5xafrNWpoEApfCGpDkxs7k185uJRSBrRBim3ZGs1hUpwTYfaeM68fRzTruPXZKYKiZUHbyJE2wW63YnZE8R8pFAf",
  "key17": "3SXS2DTMp9nSTihgGFZCRweaNU4HjVrm4KSkHc51rC1zwFwdMCYY8yfSgzyVACC7yB46SeEuWyssJCV6eFfHzFBe",
  "key18": "3ryfKaEoBWfDHHSCN5EcuoN3zvKMn3b8JSKG2k31yHHzx8ttLjW1G3xuvtV4BNRpraxJE8WirCHaGZrHMESK2J54",
  "key19": "29WshYc3Kng5w2ZzSDSJcrNF8KmZpbEb4s6rRFfLb5qBzNRecPgcpEzjYdhejDrLby9biucreS1F47i3KY52iNKk",
  "key20": "2AGzM351bKvr7HTZC2afqqa2bgvXsWHd3v3EjuNKWmiCbgVMjBEo7aEXQSKhwHrmek54DYkn7qiJBFJq42aN1Yns",
  "key21": "2UUQocVReMRJpGHbmivucqmVGB4H1qRYykR1hnDVQt94AG7iGmMWUSGymzCeEV43o1i3iAFFrC9EKXAwfy5cSDMp",
  "key22": "NiQgaDXyfLALgPckHqsfDdP3ifYMX8yD5wRiCG78fk9CAFHJ9Q496HhfoW1qoVpsd1K7YkJJcNSFPLtbDCqkuXx",
  "key23": "5wPhaNpzbMNKQSbmRG3oAFE8hAakAkMDhYeXa6wcmJeNLRUmnwZv8mvgjYSzTkQRzb5Zgeyx9ScZL3qYKFkPfHGy",
  "key24": "VEBkvkwwgbUBy7UnuBXANLNZRCbuib1bVNFo2NnqtPVLgYJDbEjJrLfy35jp6WHR4BhSQD6dqEPzCzMQNYka13k",
  "key25": "36wbhbqABb3jnbXMPUSDuZoCa8jCvdpVr9zdQT9u2TDwhm3r9EmyWjsueSSZXLVi8WeZp4aZ1QwT52smGowcsWFo",
  "key26": "59WQLLSzWG8R1JWP858dff9nbE8jL4coctsWcERgPEpf97fpQZwofDxzRTWj1G6en7szgXQb4Z5kTh4sXFQ4vpBr",
  "key27": "2gyHF3e8oXezawTxXP3bDmWXtsCYKXrY1vX3fctgtTZqLLMBCMePGgyXKN8E1toL17UeuSKyM3ZHP8UPW5ZwRy4Z",
  "key28": "4Uokyu6PTe5JBDxzeKMjbHhegm1RXbDU6fFDi51EauxCfyhFMsQDb9rne8L7ksfXpg6ez139G4PpyfwdAfLtYmuB",
  "key29": "65gsuveYUZa8Cs7wmykFMdYemUaCaiJGmxLN5KMin1Bp6bJBrWWA2ibHjcDBkE7WrbMu1ECm51DSNNCa9DeEqUax",
  "key30": "23aNnaM7GGoowBsjsVVAvwub4omX7w2CjZCDu6oXE81NpXdJyrAyQyVJcDaNRQrHjfCk56JCfKVayTGuGvse4q8H",
  "key31": "2xvBVz7a7gMfaaZHpb8epxKR1QdCR5ZMsgD1nvqkquPESAnGAwnwJbyZ25vXKp2mcZm3skze8kyqKtprhRBJkBro",
  "key32": "3FUJuk3zRddtGGUAhvcSfgon25zjr5ayGR6dS5fN3oS3NN3XsofAHKdZzY5HoZafsT7QXBPcHRbRAsMtVgfjcQ3s",
  "key33": "zZD1xYqofDeHNRguwLZDch9Xnyp23bgGsz64TmGRogXxA6DtCZpPLRxSesEJBMH141aZdgPYX3kLKwFSUcSAp27",
  "key34": "n2mjSku2NkUXA4KxbnezjxTdvQ5AfrR7x8ztqHcyerC8HBsRjGuH3dH8JJzccdxkZZHn8nkYxM7PqsVjAd5PFV7",
  "key35": "LwkDtkHXVNdkB38dGbUYw7PHibJiC5gfKT92sgNJiULyD6wiofPJJ9MP98bwWfCxKkj7bUXCK7ThabUC8V2gF3J",
  "key36": "3qKCdcLbsn7y8ae3pcHbfhrCZ8g3ypFyZrcKms5wqbw3zsqv81TaQWux7T2jAynvRuoXnuZo4Y6RPVn2WMehnoW7",
  "key37": "5eaL4hbt2mfiGzwgFmU2n2gVznybx85n6QPPaa1RaDEbywjB4GUtewPCjPzymzVoyrX2LkAwbAZn5XJR3GvDeqGg",
  "key38": "2FekngAtCPGEvRJw4ZdHY2gPCZ3hfEpLQMJCAEfsEACLK6W6Lb5rLzCM2UMxAUEXEUv3DjVxXjggjHFysSfEaVF3",
  "key39": "4CgWSceJjhABvgiPqDXRWrkfHnBV2n8W3xELVN1DPiBFNsscE6NfYSo1DB33d5NmcRbvJYt3ByZdhQCPL5NVQEu3",
  "key40": "3yZmBWiNr1Cdo9HaHu44MKMtvL83qMVrcjHmA1DAK1y1UaWAmorgnXDeaTZGB7JR4tkiD3S3CawGrvLeK56anqS5",
  "key41": "39ZNWujrkuESEgzBALcZJBjiosYXRFCsQ2j4uP8wbRfNgv3dWHBCKTKF3D6hSjbb5pjiZS28XiobwKQ6k1Lfrbtu",
  "key42": "GoB9sUd9YHxkPHoaacdhThwc1dBgEFWKMDCd22JqvzSbzgbWZHvSxaaXaZVVqWh9PbxPTSMEQuwvaf5Snov7UWZ"
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

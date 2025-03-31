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
    "4ovUjxb66ZbYtJda6XErGnxcuKEGsH1b8X4PcyUewDSs2R5hvh7SN3Jr38qfoNcuengsBgykiFyVJBXrSW2feq1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GdbqvgnYoP48ahu3BQ6BxxxgRdKG6WoEwrsBvbyzWfQiNnRNjmC7roSJuX5SUhhkRREJbNPSDQ473kdvnpW4Ktk",
  "key1": "2ZkTvdEmrjqztUNzG3hTuZTZkvTXZxiAamg8Mjcou7mrhtNcqL3gozHZ3Qi4JJEVHWznxGjFYUh3oyat5GAxVbxq",
  "key2": "5Ss7iHxjGGZEnfsWJQUUiBRt9Czshy2wLBp7L7XqFqzxKueQgcDypTrWjMekpeWBHmBSwHjR8f396Z6MDU94sN2v",
  "key3": "4ys6wSuMoT7AbuvxQXQEy7CVWoY5yoE8aaPzh22F7XRxTwUZ85wsB8jaqAecKAU4MzW6tfqRDeKSk3YdukF9A6j",
  "key4": "28e98c1UfxhtURabHw6q55nPnJjLkhp1nCG2jxNJz8oiEJMwZ191dzvvi24rDmWcXBaBKGhAerPet9B9Rqkttao6",
  "key5": "33Ym9XAmz2VUCyxzBHZeNppgWyJvezpWttL9Z92QfmsonQMnA8LH4sjjUh67h1euCD8wpRznXsMds7FjGGtTPPv7",
  "key6": "umg3JgTSivwFZj8uPVGr1w39CJSyUS7riAmswKYXdvTb5m9NLBmHjT2bwmfMMADV6JmixfNiAAcZWmZ8Mmbo8nT",
  "key7": "5G1gGXUkCmS2bSwPJeQhvL6qMwAGn8K17X29WzThRH34pwrvgdi9EuwbGZvbzVXVMz6W5y1bZe3hTZiqtTRQC2xb",
  "key8": "4hFxHZyPDxa9x2GRLnUCuT5cfgUZtH1g28JkFq2CN6V9L3LqbvZJ84qYaab2j3RRMosCCfUD7GSVsyzt59Pfb1i6",
  "key9": "5DbFD3NbxsXwjUJfW2QYhxD4zd1c9efRks9eqNEiZaQJ87QefGWWKzGZgKfJeHzXwCPvs8k22GSUQKDx1mCDvawB",
  "key10": "5xQxNQVM7aWaL3amgQN75QTuSDZoWhsecVPgANKyKRTwZmF5RFNDUBuJrZEd12ZcPNfTZuCkzxYyzKTebhDWHJKy",
  "key11": "3XbNiUqCo1RskX8VZEeVDAF6nkPMArbDg5VVfb5km55fwa5cCjmEV4UxqmPQaF5WD4JT1jM29eiB2gbp7iK5cSeb",
  "key12": "3XXiL6YggHWR2rzU9Wkyy1F9EwtYMAG2kBAg8ab2xoCHdnJa4JVj1SnjWUoqjVSeD49ABknnB1gFSEdxqx5XmeCM",
  "key13": "5nuL9VfD1YEPmgMtPDEbQz3yE1LaUdrLjrm43kQf5R2zX5dvwidyv4p6Pt7gs9zriUdUaiYj5M5hVEi9K7XXiENL",
  "key14": "3g1otsCUfX6stYkQ7tDnLG72226dD9PWVfqoiVCsg2uzrwygEmQrrkYcrYpPzqdRem87XMaNqzNqJvrkJvFqdwcx",
  "key15": "3W3ngi7yfydmkEztbjM99bfwuQ93RuvMSXSScMz8bcUH6QEqipkG9co37LTnSn2zz9GhLH11rxnj7wjjJS4Dhwd8",
  "key16": "Nqsrcn7asrnxJ8KgLs5Hpd9WDWRG6LYiSk9vJwgQPRsis8ibTtVmb9R79RmEbo5xBKqrXACrvUUvHr8UrQDcD3c",
  "key17": "3aXDz5hekphx7AG8Cmep9nQ43zTMewuvovUXucxMmeJf9gyCgT4Ybo6Sf8epyaLtcZvs6h3VTPBp3NfkLrReBNZx",
  "key18": "3iH1pAMNeefmDXD7SbZ58yCzuJosbn4gNAYmyM7pA4uWobYyyMzkAbQyczZN7kKD1Vo77JQ4MdqsYWrLXMMom56m",
  "key19": "4ScVpXMBVkx6Ua3G6j6NpRJew2mhUTN1AFxmEjTcEnpXJSbrfCbNUqYBpMNBRLAmaBFCTShL39iv2uv2Noee2xt6",
  "key20": "QFXeWUo78uAhBdKWRr4TbkBfKsZd4R8Wc31bo4sGQ5MwAPjdSKzJC2KTkGzG3qBs53MEwRe2N6YfaQHem87qaRW",
  "key21": "5NFf7bzekddymnDSKeXtdcXJ7D5akUbbzBKdeDWzLWRrheyFcYApkNpLokZjopi46PBwUcyUJ7sG35KWh6vQe5Sw",
  "key22": "3f4qTvEPbqqWhmwDQ1GXk7mNknGGjbkUqHG7Cs9NLpS4oQB6DHVQNg7PnSQaUQV69L6jBquTTvbp8296pgJcQpM3",
  "key23": "4HSR8x1oAP4298eVp3UniN19iVLcW5NmYLiCK9NFXNffg1F7dKn4evGkv71PGsXZT4Uc64Km1uE167pkV5Rzu4cW",
  "key24": "3tcRuNE5oJisSRcCJqfn2n6eV1EKgAoQXimW7zWpDZK6xGwj7ViAqc6b6HqHmScHuQW6RYAoNg6gx3tLRcrhqD5N",
  "key25": "fwfojXe7fHsJmgWkunodcMELXAnhi6uqirwCUQ8nRajQt4w8NGqGXT7nVKFLz3cWMsUCcEwqeFNd7FnKWzMsgy4",
  "key26": "61mYGkfXwMKY5sDLyT23UM1mVKuiCZQjs17KCFXFubSBNbauNrax8LLKGfru5LKDZZtxYzgMkC5JPZAicxAaZXzu",
  "key27": "38vJfZX7JyoBaWFvacphaAXzBekotC5TGZuWuSuMYHjigtmVQqjqupt8gG2mn1XJp9MPWJD7C2pN7433WD58j6Yf",
  "key28": "3iom4UWaLwTLqgmKnvRJpLBw8cu4h8yaQu5Mhsi9Uc7rxD43Nc7ECCzXvMefy3mrC7f3mfFPss4FTEArc3jmjn1r",
  "key29": "2MKDrH9MimqvsF53cQNByEZvA7Z6YzoGFbQMJYQqijqRyWMCiGHvsxdsfNB829xLMrvgXq6SQUet4ae3KKSpaLQX",
  "key30": "4TsJ1MsmC3aYfciK3MJShhH5L8mXX9HQAx8DNdVoJTvHhyLFpRggXm3FUVRwZcQycMVS2QAP2NAzGkfix3hwe8yu",
  "key31": "4GEBiHsv6NXawGTjYSjbvN3sq6f4nZqmAHHaQn1PDfhikVkEpXKTYYdov8fMZziCtecxyA2MJmGgkp65b3p3Ak6",
  "key32": "3t7TpZ7t41jqid4AERJx2LjYoRmeK9LZHz89AokK34JTK6qT67DtejmU1DaEJ9EdDz94NpwCMhkxryiGheWzfene",
  "key33": "VrpVGE6JxtR7XmQthddgx1FFyiHn7TiampPnPBkNb1Lx2JJPCKeoMFfc3dBLfG5KFC3HuMEu5Runq2peo4RmiqY",
  "key34": "3A5vzEWuPYEQn3zmfFtmDiFognYkyun8xBbkHNSXHKdSU5bbKNQLyLWoTc36A9DvBpASsWf5Wi1KP9EupsiyMfNn",
  "key35": "2A5ZjV8yym132hUE7Z6tdKP2dgwrRx3dBPSZJQbNJqNQwpQBR6Aso7ARmwrqGp9jQWKuWqzY8fmgiYTF5h1BFmat",
  "key36": "3WU857SsK49amwiunVbnCmL542s5RXc9dZLoVa2aSkTkCS4UygJamsiv6PhAmHffcuz9DKXzddNPdTWojMb7uT1N",
  "key37": "46vVmimt2ck9yfZYG9w26Yo9M7bwNx5Mv3B6xxH4xMjZMNbdZRHsht9beNFeDy2fmXCbq3Gx5WAdd1qEvCkRfAmF",
  "key38": "2uzsvXn241sKd3uT89w74cgUNLSqi4ZAiirk4GtefLrwHGfU2jsFWVy7pRUvPR5EaWimgwgHiM825YxQzw2B7ou3",
  "key39": "BXyTXSogexQooHnLexQXgoNgxArVW12MtbaNY11A79tn8EXSMC3CWbYo3vpTegmwf6EyScSMW7AUxKrpJJ5TcFM",
  "key40": "a2tebPVYW46VZFdBCjhHYTXSpfkaCaRnmJyNyLMsk71nLDBSqTkdcjFyEBuLcLEMHPmACT7nqntxci73cAri571",
  "key41": "2LohP2ykvCjYRddJQ59JZSd3ekRUipYW3NXwJipcY451ZwVB8SRE1EHB55jA5kwetzcm9nyuout8jm5y73AcW3wR"
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

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
    "4cAAFVvTZzuWXDsqdVmNf7QiC7FLpVXPJ6jDkJprs9fJsgsAMHzc6LVQSYfX3PACsBFx6ogrHV7m4ppWtKWu2gjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECTxtDyTNCiDXGWqgtzYiLgbofimSEb7f7JFt1mmCYYgmD9yWquU1XARtfg4aY26nYS6CYHxncubg7e1i5pEjxJ",
  "key1": "2xjgugV9VRpz2DLRpN27DbdfvUbG2nnxS9c3NhQBKicAYzZNWMoR5xaN17dRpRZEefGtMCZLJmCga5F15eYKTTh9",
  "key2": "5HmR8jk8T8S6wYyJFtYeb8VwxD8s7VvpJFutgkeRyEZ3p1QBFPSf51ygVrXaSjLmFsB7MPUcJKM5a2JwqSicWJHR",
  "key3": "58SEDXzSe7aRW5ckvSHXeH7o6kQutKMemcJHPGxYUEeGQvyq9rK4VPDpZcY1uY6pzDyxEYL1SBJtKCEFRus8L1oy",
  "key4": "4GwaYXRciyR76W5J7ZExZUt4ZxVx13UPVBfZUzot5LyayizrV1bi56MnwY59pGsNnz2PYBGqmx2T7c2wbw4FsWKx",
  "key5": "2VK3XF53nzVMB69NwbdJrXeq3b7KrZwpj6BNgKoiSxc3DPaM5JoxU8gR57UY2UNbERaNb5TLREPh8mGL4dGFvrKD",
  "key6": "3qU8Z39DciTBsRWdmpfi9qLHJjueDPWouuHqgSGXKHsZiU49SGhhGiC3pgB3LexxT6FwDY5E3zL1RKtvPbwvxaGq",
  "key7": "RJjsARjqdfxpoXX3ZNEvndGhSKdw5Wie5my4M8kR5rXUvSP3fxRbhVQhLt4hHiUewCqb6zekeyfaBcwJ3LKRJUA",
  "key8": "3KSEFZsbjcfpXYa1Vbq8ePNS5UXBo7RUhS8veiCTncGm244eFdSw9czzWGas9XXiGVnnhRpr63D5wTdZz6fVpkJq",
  "key9": "wkYHJ4ccYAYnU3hhTL9SmXL913h6dXVrQWbJ3weLULBdYPyE3FnErG2RXwsrxzU3Mjoz19m2L9ZQ8hPMkbwMTFo",
  "key10": "2uHeVyM1hgReMiTuFMWeuQQdNf6vAu3Rzp8dKseqecYyvnaChhAyDbPKFahcA3vh7EN6LtA4egFvWurTvQfshYhM",
  "key11": "2sygkb6kgiquKuHxDmWKGQD1MjKDYwArTUR7VmXmPC4Hzx4mzWLKGYxzgMdp9AFu7kK6MCs8p9pUe2UsjhQtgbQA",
  "key12": "2mS4HKaP5bb9sLap6CaYNYxAtr4C7AiueubVDuxMLEjL4waYFDECxtzKZrwzgDJkmqyjasow2Ufr2Pk56ix8kKGB",
  "key13": "2CgrrPZwXo4J5QZZ9wRFjPqLEn7UyMk1ikC6JrEXtchSc46TTTaZs6NWwo574bGdKRbDtQwxPrHppjCAFNqiWjkz",
  "key14": "4NkuhkzJfnBKNhwo8rK6nLJGX1RTrEVCiG1TYemd2AAUrmPwxzNxpZXT6w9CcVZZmXK6TgvhWEN7pwqj3zB3yCyg",
  "key15": "5oTCkYzNJu8R8mXGXtoBWMqHNBrPe6kDoCUtDREc2iyrbgPy7m29tnuwMxzEhmgR6goQofd3wUmSFZPLFv95fC7t",
  "key16": "nVdGiECWPVux4JM7CSVqN5jiUivBt75EFBFUqzuY97wcqbwRNu8hwC8JTYUWMoQsh1rxEX2AHp21YxsSbvQ5z7e",
  "key17": "5pUf72UG21WGRcpbtEFPCKZDLwFEcmMoeT7kExkJ78NTsmHQ7KBRHf17YqwVA7iJEQUqUYA192A1niQukhzTx2xN",
  "key18": "558QiSboECckdkopNgqBhhhuTRQ9gyGQZKEtwahoTALZnuXdcUbGRS5MXpruAWT4xx7i857DozoFpepx8gT8fS88",
  "key19": "2u3aJKZ3zLSXAjDE2DLR68RdKG7qXRH11XH5erZNnbUap2gRjk6USLhuRBaoKn2Ppt4jYHGEwa4M9FsRaqs3eAM",
  "key20": "3VYajP5FumxassNqWsVTRfWu32iLw22tak5SRiJKSbD41FekimcqtDgww6HSSiSTFXpfFCLsrUA2dxnQaEJJSxCx",
  "key21": "3tshZTt3MQ8owjuHviKwL4kUjm7ZbGveczvLq6pLF5SFdUPeRAg2yQ2gErXEnn8hKJtZauZqMMWCzLUxsxcrjq8X",
  "key22": "9qb1ZHovTEQabJdEdvmY7TcGCXw1DMLiwNXrDmUXhEHgziLbSaUQkhPsLLvxReEQMWuu8eeysWZKhMvW2oZ2Z7r",
  "key23": "QVVAL3VcYDGmkivCrFrS3ofEFznZMDwq23y5m2Ze5HtRKvy47AmD5JmM8LQK8ZqK1iB62yYgF8dwjN4ejgyJHxG",
  "key24": "29Gm55StBQLVsGZsdfreWoamoR9DBegsVbuRGVUi76pZ9E5Zk6VN2G2ix2nXCbsu2UF11DPQYdghb4zFnNDgBNgK",
  "key25": "4f7pygGTuwo7W5KCymeWF7kYBvgJH5kLThxrax2yiXmteXcdmF1cQ8vNRMxtpZwzZeCpmdZRLVnx2bpgCrzy7Yp3",
  "key26": "47Z63zZM3foiJwbyeLmnNLy1R9DdyKTYg2K7gFUS3aCgQJoMdxroyGw7hMP5TAWHDC9nAuatRjEnAUmYs6Q7J3dm",
  "key27": "2mxb9SqddbNKaWzZytxVZzumRHSxDWuBGMR5UozzkaPpeWw24LgAacuv8fhApF3MEj61CNhMj1YA8uwbz8H7cH4b",
  "key28": "34Buc9V74vcM7KzghuJumNmsLss5PYfnqVkZCRT1Adip6gYCpAHp6kxH3QnNCqXMYpheeWoBbXdPvXibTUefdcy5",
  "key29": "r1Z5tVycJ5u35rcFhrH9yUgWYMZ7MP8RP3DdgTzt14Bcgp8Y1a88oSL8fa9iXN5YFE6DVKNsAbAq5sA8PpfFLsk",
  "key30": "KdSyyPX3CZHV465PRgooESQLoKCde2zD6i4NG6LSWh7ZfdGuTc4F8QfHryRiE7bBi2V85dKUcdVnECxXU7RYnPD",
  "key31": "6vrax6YhKmoZJFxQZZwSpayHj2KYUzrdn6Ba6UEgu6p2ZPr2Mf66kgFQcuupDbQSmVZre9H1xRaBUQpsoTDSdoD",
  "key32": "9dfg7AfuoNvX48ziuQrF6TfiaYSs4CBkKpURnF2CDaLt374mbSQh5avdBQPwsoG564KxrS2iwuChju7iScYj8qV",
  "key33": "hP1KHmECuajd7v1p1HbuooecNCFaxab8XKih8v6HGkJEyq5hgTgkXPpQ8s7S9WFwhXzyFQqA9TFHTKNXwF2gczB",
  "key34": "3LrhDdFz4NbTLE7ZgmYyTfJUr3X4SNrrSvJqFAaCDHXS6Wj1N5zozvrqrQ3ArLb44feL5cVpmuKBVhBSZPRTzeJV"
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

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
    "5MiA4prVjqgpE34oHBADhPDSgbWtoex9eZdmTnhPL1CfwWxVkm9AaXhqkZoi5QdgBTavA4WZ1SojiB74Sq8P3nV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a973ZspwcSUx6XPZzaixTiMKxH3sq2myRACWdgfbUeM5AmMiNHqtQjksaoXYCDwgjcpbwh5hSGccrJXPQfkgzVa",
  "key1": "5BYiVXe8xZsgoKtT3gaX7D49LeYuEYuTnykMhzfeehDcBLbHPMXhABkpTqAo2ToZ9GX8k5ftJAhRDGxhbmq4YrUx",
  "key2": "4gVidEpNiePof9NEDA1Z5TcDf2tNKJEZf9a1K47JZQUR1EiX3KvRqsFL7X3K1A8pRJA6DB8P7G4D4EaE1Miiwqam",
  "key3": "4dsWwvkMyj1hnFRmf3CbFFwv27bt91Rasj4xnGVNaaKfdcodcKriebiSGBWBMGZL5Vw4AyFgN6UE1BbicBn6UAwx",
  "key4": "3ihnCfZ5ZeSkt8ACzq3zqe8gHsYyWik2mB1BZ2wMAqALVFobepwwWwzXS2ESqsvCKcvJuSpf1jxrWVEJPLLchmoY",
  "key5": "2sfqdSxorKePrPpPUtruypcJ8AVvXu2icUwbQhxeZ1U7JyHMjXsTrcpR6PvJ9XrR3U7Z5TpgmsJmDmNo8nr3sFdd",
  "key6": "3U5vqoLJJrm3tTf5ckK8hBmLBsVsVTx2E94n3hd88j1NmMH7VNYZCrktsFejJ5XWjt3tP18Rw9fwNBXyR8tzAeM5",
  "key7": "4LX3fpkDXmABcQjcUEvoUPNoRNUtHSn7KN7VCi12dYTt6mHF2hFpa86hJd2zTZj2anRw574WySq8SqxPc7DFSwCV",
  "key8": "5wH2iygFcSfDGh1BbSikVmkdh5KJ5zDKKL45849RxQv48WmaUzJkqF8GQUZbeVDDPVZhRrSmJABmYZZHHqBBsZma",
  "key9": "4GjGhF92YJmV83n8FcSNUjQb6hBEMyTBpMyHa7fMVPrdcvLvsB4MZJmvWJ7eQeNaEgEhLBbpC2JHA6x94AgF56yF",
  "key10": "2rVr8ogMdQysR2wwhsmEAchxSxPKZE6ecFA2JU5VkaAor6QSWTEimZ9KT23JWdXQNrntsLuYTNqwqQHBqAv5mV5N",
  "key11": "5jx9YyrdM3dXSmkCrs1B6WKUhWNYQpEnMuogZknkSp2oe6tfG7yU5A3RTdgraY3DyWYZNW4GGP6HG9kZUDp1rhYz",
  "key12": "5nfvgKNbJxDPgVsGEcpXCYq7R59qZEcrqudoYaibfBMLCgnCx84w2str4bAXSyR79H6gLNArpd7fbju6kgdm9a98",
  "key13": "2LufH9ycdajBUb3RMfn69yywuyLVCbhZx57E9m3aR6mvqX4Dkw9qpxtjn5QHfi9CwPJdunjGfVPxsFSbZ7GY5LeF",
  "key14": "tGh95To91eusKkvup7QSKkKm6tUK7xA8ozh5XZ2k91Zcac1bECh3rmCaZLEDNybwa7cdenEqgc3LBCeKfbXbAfY",
  "key15": "ZQHj2E64qhuuZFaqDPK6HRRT5a3VfjseGvcrAm9ibYBeZvh4e3y5ekHjknfmrpXCZJVV3dKoTLxfSbq4zphbEPF",
  "key16": "5nWMAhLw8LSMvM7b2776BS9CTDcEtPkRu3B3GjWXKfzbmcoV3iim5bLZnVtYdq8CobFojiJrtM5argD9TP12gY1u",
  "key17": "4bWwNo6bpcUT5Yu4QMmcwKA2Zx4Nkiibm1Y3SkrGs9bJbpQFhfbckEGv4uJ6cHPLbN45mbjSFGn9aCSzXgLZT9jb",
  "key18": "5nbcsefbKKtCgiTDie9VApFvm5so2zirkoXr8rfTTSExEMVbXqhRsRtT7VEfqtARk1MDdyYcvosZ4P5snfZGM9Sm",
  "key19": "2fmQPcH5TLSrTYPcZgzLzkZd5Lx3dGv12EfpnGV7EoycVdGfZy9FvKNACvzCHkzqatmuJnjg6NBCGo8YAdmgHwGW",
  "key20": "4rKSyGsobb3xmjHFVCY7qeeuFDjXEdAxHsd3WHCEozVe9PGWM6xfAtzCFkYyy2SA8iYSL6fCcKVQBXn7Kv3srbrX",
  "key21": "2UwXipEVpWwRDkZ6JkyL6WE93sBCNXXnaDKvNFiV7XGXAjM616B3dTrEne8FVPvgwfAkuUDGxDu7ztkHC3XCpju6",
  "key22": "67Uie4eUAShtkrQoen53eDrQh4WGQeymVX7WsRUWAGCwkWMRBXARnfURpCKfedqU2hEtkJsUPAtDJk7byW7c1T91",
  "key23": "5UsLe9cUK7SyY2hRTwpmx1EWaXY9WC7gKG3TNxdDawMGVgE6CLPrzbCfrV2uhbJtUuGVJyCUZDWMUBPEveKYhhzT",
  "key24": "4GZfM6Ko7X3DJ2eySQWU3LYrg1MhejZFL5U1TDLPYVnWkbt4Y3DPwwvwAmygj2KKodd2kvsKcXetHPfcMnsKJFXn",
  "key25": "4Xp66UuFmz9YevJfrYMBjzwVYeaYUfu6ukSBt3f2F1Tnf2suZPhsaJywQHYohJiDea9raJofYbb3VRdikkT8MQgi",
  "key26": "2QZwaCFz6mhpqgaCrvJ6QS4ds6wYo5jdcK46mzYYUNvabZLm4HsYRHpAfcxgpkkDgxrK2mzMaQuDyLASdsQMmksf",
  "key27": "3BdkkqR8CKioVC2JMJ42rPChUfzjNATYfTbgqUe7KD5UpzjozRWsBU6PK6vZFgcQsRGP9cHUwGiJJsCdBP1SPu5V",
  "key28": "2eHsH2ESGQfYTwL3NLrbh9SUQzRRrKERrmEEgzziCxEnUxdMmXxzS13i4dA5fmcoBFGLDxtoisX8M9VdsxrZgJWu",
  "key29": "3JkDWEbWTu5fNuC4iTWdDRD9fnQz2NYuSmqgPbctZg4sRQVDTKKeeqnVtZRHmFvu1DbxNhYaRwR2VndQdjr2MQsG"
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

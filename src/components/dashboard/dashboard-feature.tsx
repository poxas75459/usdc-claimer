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
    "5vmXCzLjMBjcznYTN65hmFuhH1c5YM1HGhNAVgrTuYZdTpCH8QWqN7Qv1oQRvxbhpjFvz1hb1oFJKC6kXsxr7jyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mcYwXt1ZUZgZmR45snzm6Qh6mZFLpaRk8HhgfTE5yMrrkveTk2DeCbfc6M5fTFVf9VFAw4j5SGZq5JiotmU8wJF",
  "key1": "48KBk7DoEKpGz4ukRmm4a2RA3v2YGN7yCYtNy3EpSgr3dNwApTqYM9KQdd9HCGGXvvh75Fc3rvqdG4n332Be6hcw",
  "key2": "3vUJpcE8g1F23UWsXPmGWX6zNiGT4DXN54axDFZ3GXAvS289izvKYYkoQvYaPFKX1jtPZiXf9VVasBXcHRbpLpTz",
  "key3": "33yYxLze8Z7Fbb1CdMZ7ufQsGWduXhisWKR32YZPDAyfcfBRS7cnyRGELfu8MKCnNRxocLkQnUMTdRUmwXTZ68vY",
  "key4": "3ZxRs1z9162wc59hTATQZ2Y9tj4hR3Do4zDJoNiA2g5YuvGHJdJFxZgnQrVqS99ySUS75J4StPeuGv7h1v2bd7ES",
  "key5": "5TqdEjfun96HbCRKb7YyMabVpxiSEMDoDuMbR1TuGZPgac1JfpgHzgcFrC4aXF4Q9hA32YgFLvSt1PrYUcypSvqa",
  "key6": "2fYsLk2qoGSLg9mZDBwoStZu5u5yPBtPgyikKVpWeAiHUj2Cxf89yPQfX2MRx4qGvUtPNMkvBVF7iJMapgBhmPvA",
  "key7": "4uXiQmyFnoyhxXuapZ61vDettM5RDtHqUpRRw4i3oGacTSwTKwDUy9d3Dw5PrWn6bSNhjQZ5YSMff8Pu6idSKkiN",
  "key8": "3VzD1oLthQs9RUJCrx1CdPEgZExJJpmaHvLdRbQZ4LdXM2F5Gu8EnWVfH4BZNEaaKg1bJQJoUQBKM8gHHECYgS31",
  "key9": "hgdLWHmZqFcLD3Y3tYYrg6TiWYK3NWP3ughdKaMxNoXarA6JN4XXFKXtFHUAeks39ysveeoB879V1dsCze2k6Ge",
  "key10": "3irrR7wRL2hMV7pCduPuAeq6vMmwLNNZybdBrLeitL4m8qaf8ZzayESjPML5tYsNyMP2sk42aPpuk1Uu8iXM9eZD",
  "key11": "66iofdmtgdzkTNtA33DaHp8tuG8ykJVdoPaiXcFBepTRRZYV3c776fTD7mk5fzqx3zRHTncDQgBKa92HMfR6Ct4G",
  "key12": "3dSPAQZKB73ZZJz46oyKwszBLg12BeLAzjxxTV43MJ9cn7vQ9YyiaQhGj4cRLs7EDuULWyXt4nsD9vZBHRMZd8ug",
  "key13": "5VCXEjGsvC6REFzGPNgjtC3ScCoCV7k1v8wNqJ2QQ6AgWUfNML4mWqBTTQG27K9Z16HF9ycrcPnecS4wC7w5qRgm",
  "key14": "2uo5hiZjF2wtpKKFDRiykiF2K8mswWALNv3bzXPGGPFWguK44L8pwu6HBVpzKfkCUF9cN1Kxyd6nqbc1KquKTL2j",
  "key15": "4QroG9FwMh3LVLwx2S57pGcnmGqjDfub3cZURNYVNMzj4GgabAYhaTcBZPwD1QYZsAYHFRCwQGNR4cvkWtJk7KeC",
  "key16": "5DJemugs3c8b8BwsYKMRafYeXcZUMNPvwuY2qk3qHNEgTmnDdwjksM7wdyGi2EmEyt4EkWUnbNj8hd18i2WWjmEF",
  "key17": "3jJRRrU6vbTJPAR5Ee5NwrAtpvjRj9UR2Z2vfFqH3bcPTHPV4oYKHqxpE2gAj862nWuZmvqSZCsA65wp3pGJbVKK",
  "key18": "3tmXXvUqYSADyrsk7BN89BuT6UKFX9cYjHhYAfCbezoUfvwDzW9PXS81gEjrx7bWqSmg37p5uDVmiCGb7XCiFLu4",
  "key19": "5ve5JjwmWJxVRRwPojo8LF1B3DrecgttQhAEBHv3dsBhKHGrMp5BFsx3BdDqWx82sZJfdN13VtwkWcxzPaAeoEvp",
  "key20": "5u3M2nktjoS5G7Y694HSPYVx1M1MmCQ5bJS7qQXMsHV6oACbRKKvCJG778qwdYYMMqAF1xXSUQ4rii7WfxBYQtJv",
  "key21": "4ugeUifU4ivvd9MkWp6qzNhLXdhBrUdNnTcNC5TxyEuNQPfDRUPLHtkVfYnz3hk3ejtLduagKBUfKTyqTxi6o4yu",
  "key22": "2PKZ7bmqogXCU9RQhppcWqKgKCiNi4TS9nGcDskXxSx4DwoXELt4uyAGry2EvrCrkCPGTyNMiBVzD7ZUaeodeRn1",
  "key23": "2L6fip1opP9yLo5PFLkzrmQG4KZW461E6B3ZhvRYrMKLKcQTXZ28cuRiN2hMjRSqD8MmN4XSEmSyNyik5eJZTawE",
  "key24": "33uErC2NbbAnAAN8mr6sRgEB33tarsvELwZehnLJYMw2kpFWdtwxGSH6xMyyTgw8fpWthJHEqbeJzYbmDyLU2UBt",
  "key25": "3rSjoabq5Ubn9oXbExngiwEQEQVboqWVoRTAFLxLj7WgXZaY8b79Yt9MmJXiuK89qXSfy7WrNAs1zePiRCu8nTCW",
  "key26": "5BH1Zv8WES5jXMfJkyyrxYtPopTQoGiXydFhjgNSfwyHTghV9P4n37NAaEqBvBt4zXt4XxNDNSW14NHk7igUQ3YD",
  "key27": "4FSRdNPsmCdQbkJ6GafjZdSXBV9rmuyA2BDzsSWEoG2GPSsqokG6ewfRfeDt9tq3ztf8ekifbEN98yav8ChX7oj4",
  "key28": "2xGhFJTCKgYgy3E87NRBzE9LKcDHutZLrb4NpoAyty5tbzBcgeanR47xhvThyHUi3fT9FXK7ScRzvKtwY7BxHE4Q",
  "key29": "4NFvo4vQi7BtKR1RYhmdzifvoc47z21ARSwQuQ6Rev6jHAHEzWq17rEk66a8BPMwh41UosHteiFWRHLeHDAn4GWu",
  "key30": "5vkV9kuJB3rijj3LA4dok8TLhtv3U77pPY6BaarDsb6NYKUz1QK4u51WqcP1uZV5EHCodTiuhLt1VyNFnobhxMqX"
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

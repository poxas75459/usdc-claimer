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
    "3rbrz9EwmQB4oZsENjAjCGAut1yoJpsbcHD7k4act5ccNdVWBp7zq2drSZQ91kzigVZSHYh2V8TpsDUc5uTjsfn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LMZvP3qj8tZsrDMbsiZy2rSQEvqLVfqycTUjVtow3ToiyUxqmKQcy9gScY9RmX4gNeMsMtfArUEVFMBfvKNDN7",
  "key1": "2JpcMvvwKoW2u3uxuR8N8MGNqbrBMcPwjRVJiQj544MFCpaeFNRcxSVzEZwv92WGykEDoh163qPiPFNaQPgRXaDo",
  "key2": "4vSshPD7WYbjiy95WsEpBa6rTF5crqaiGb18JX9cphY5wHrhC5aWMCPVrBAnMEui5TDzQ1S3B2PU6FoKcb2pE18i",
  "key3": "2kKqsWnmskGcURfwgAZBUwzBSwGrxTpsmoT4BzDXh8GQFqKa7vEGJM7QmEKM5tAuSPo2Xy7jQgoRS7SV4syALxS2",
  "key4": "47vpHHhWwUgokA7UBXAXrxVY8JbiUZ7QmjE3fCfk8bRukJEpoF89Ls15qTUwnXucG7ZDdMHXKmrDmnQqYNTia92E",
  "key5": "4DBv81c4HLcSabnVcsepjzQJSjY7TirprrLTxJKbevTNuCvncKrMESv1kr9c6hJx9idV8qomjKFzKmJ7ympi8fYb",
  "key6": "TZFea6R3nCnvE39juH6VSYE3jPQVUtxgX36aCECEBN5xErcjbtMQ4rcveu5wjPF5dvueFAgsCBKMZxfGj1DxKJF",
  "key7": "2g71ZfYLzXPk5uh5roLjNTS23X2h47DAC1DcLhsafmFvNex5b2SciFzWx1TeahECtUNVS4PKsrrvkVxSobooiMFF",
  "key8": "49efT6HmSmJL4EU2JsRUcJN8jrrZpViVDQz9VguN3cvwje6QMBbkdCK6DYKjpXieZ4RGQVBWEmb8zaDnEjijgxyZ",
  "key9": "3NDihjZ7QPZWLoMF6LiNQCSJ67mMTTuP7sJLKSoxaY4XjYHKwFsrBc6wWtt4vVx45WBjXMqZdDCZ2yZXf4UvYZ7y",
  "key10": "5mGG93Wt3SivxT971PiiqRSMBNKKAnNTjQyc37NCXsHPTLVskhSZzEmSA6YYmb1nouJNqcgtr3sm2zyRTKwzbssj",
  "key11": "5pfGA8zT1DEpoFhFBYZn1SasM1xxKjmVC5rbga7TpSScomVngWPQys633hVAyhwNV34MBMd9p4r3vHcP5nLaHUR1",
  "key12": "4pzc3bhuY9q2ynyaVVUbEAwGsgM8Cmkzw46inqJMeob3ZB2QjeJeQUdqbK3c9ffJm9AyeK7E4T1LrMvofGcWpxty",
  "key13": "3B4uSCAT4hxAWipcwJq6Zi1GthCzfdfJduHiPMQ5Y2XH6SycZZnjDTbxNZjyfUEA6t7GTv3BJfYxgsW6sme8Jzk5",
  "key14": "2M3ZnGM33yVFPg6FtTVcCzJA5ofwAgKax6wQw3LMjGLJ69H597PJjsYEhuBw8hUaPKNFwFoMhtHQxpgCFbRzLgVu",
  "key15": "3WsHdP49akfyeFUf6RoHJCrK4US8PncTP4aS9dnW2Tk5eepiqKcFiiT3jBEqamZL5ffJY9QX3zmYRE2MM1CL5xMH",
  "key16": "5BovP8NWdrcZjezc9JodBAjeG6zKJMVNEb8gHbnj6mypE78YfZ8M8DuKFo3xxxjqthprisZ2fXAxTLGLw8Ehnc2a",
  "key17": "c2zHynDRb2UfRFZXa9HXk7T4bK3S51cLc2HvBQKe51qyjRf7Zfir2GVZt8fuKFS437AKBTbui3e1feFkQJcWNLJ",
  "key18": "3P3VvM5WH3vu9BjxkajHbNvhSgE5woLG6NjbCbgDqy2rUJFUez71vFqNcRs9ZLjVbZhX5gLF6M9RTt6ZCTG632Tb",
  "key19": "5vNXJJ471gNtq3Np8i8r1SsiM3uPTXNGuvq6Bkrr6tz2QBXyDwr3vBuczuJeE1EEBYCR3vXL8ww9MyvdMTTG2K3k",
  "key20": "4GEyykopVDSz75DeQw1JkgrfUrXytaZHY4ifkZtKB8D9vQQmmvCokKNrXmhtHTGUbJQ8z37gZxchECzQFCm17Kks",
  "key21": "3eNf5BGrmT5aGrWLs3jcxTP1E6kgQamBH1jPkSXWxA6TdtURncgCcqSS5ojicLDmZAmubrPbe89STeceTvV8urEe",
  "key22": "2YBacveogD192vTszijyZ5RTW9GBqZc6jbP96Wg76wv8JWmFmskSZo5LRAXGFvwdWVWxAH84f9rnaYGrQHJVKZeQ",
  "key23": "DVipUZVvjiDGWmLbZW3P8uN5YAj9SkRFg7NUnZ3N2RdMWriNgaQrpdNe2fsj4MPRmC6d6AEpkoNVM4QAS8SJmWH",
  "key24": "5KssHokZvpc7Ydb5GB63i2anaHgMMSZuQbb8JCZvedV1tdVzDwVYCi9ncSWmwq49QQjcwnUd8zFrwMnRZDngRETi",
  "key25": "4dEyvKcVMbDpd5kXEQ1c67EieFbdB2uPrSqhNsjTS11pcFXz1hgzNByusQs2vsfLkqH97Vrz4wc64sezLifAMhuL",
  "key26": "oKFPKhjbmqrFx53FGmnR1f5vsLiY1BSJEE6dbTKFJWiF531Y9oq43tkfReZhkziKHCQUNmtMm4oHJfWU8RwCRdo",
  "key27": "5zLA7NgUKzSqBHpUwN968v3ToccAq9CrZRqAaLPqd2omy3ET4ZNNXe3M5fBK2J6y2fRMWR8upno6AvxQtyL4BXuU",
  "key28": "4YV5R3NTmriS7ZvAksac2h2buCbRnvMHXBu6h2zzSFPn5ysZ8uqRx7BC9Zcu1H8XbuMEqizHd1MR1ojXzRaUDz7W",
  "key29": "4Xw3sPg71bpetpZHZLuswWWoQRty77W5xnCFZ4rPA6H64xcSzd2pre95RiFc9iqEkfK9TXFgK2d7DMi9ZykWyjUR",
  "key30": "Q3aWRcJbnrvQUDTLNh8JA4dwAsEm4jGR7CSYcJufAckzqhBL89JgB5zgCY9WDZWxGnMmyANtybfsUsRQ3CkHeg9",
  "key31": "55k2tqsFNY1CgixRFDqQPwfzS7ipxXYysqc9sdJ4jtpKdMGXFb1pedZLjFDrcgtRQZkfpcCbN7qLqSX8TKSddwoq"
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

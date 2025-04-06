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
    "2owvP1QJRjn8GmpDp2uXHsJp6rPsdqUF4PDtbCZD3Q2w1Rpmo7jggCRnohsVDLUWHh5fWwTiNSte9HZL2zX9q1KP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PUrxar8v7GV7dbDcRK7rZ4eYQCxtqjcyFetw4uuWqbPYkPy8AeyYwCr2aJGfWYdk3jzJ38UExD7xHRoFuBvM8e3",
  "key1": "5waFhnYkkNBN2Se6UJCjZpxxrwiDfBzTumETBK9uQKp6dzNhwV1mJFEapis1ShNPgE1T2ontiH9WRC5sZ5PHsMKi",
  "key2": "3dRe7C6WyFDdcih6FNJoJ7JQdfhmEwcufvXxPqkauQdVig7gkKmL14LS1tbdw6e8FnJmDKqBTaWSEBWmeD6EDPYq",
  "key3": "2DqxSkVWApXnzQrNBLU6DvvFaDjsf55dauiv7kfQTDJDc6S8eELRekFo5vpL4SfoB39CK1rieTSQNxeZiXgchsB3",
  "key4": "51aBBSh7BdmzkWeeNZVx5YruAK3o9PDo2VhGMi4iLv8M5QdqcSc824Vm3Ys6UcZq3RPLA9xcp1HxvmGv8q2avzTG",
  "key5": "5VcbM3mXdiqRGafS3wGYnkstHNaU2ZRAfTm338SscD7rq9AY39wNWfLWp4QpMW5sDnkJHysMGNGGecNt5WPXiz7i",
  "key6": "2sfQ9ntbGWQ3QJ34xJzdhSBCoBfSyLBnPFkreYYgxxyRaSTLfwyEpPPYG4H8J8P9uZ3hoxvt9rxEZPfJ4nmb6FBq",
  "key7": "ddBAbbpy2ongPovEyNDcFEy2ywnEgh9v3WsPuHp2MxBWJ9WtydUAzH4uhqhdcdB4ajN21vEXbw3faGBAeVhTPUR",
  "key8": "2gyjjLAzZoCM4fMkUm446k6ncRe5PY8kahuFoCp9j1hGnsRA6H5VHrK5fJoVbVLoxkUZGQkEsbXKV5JWrJN5aTPK",
  "key9": "2Ccegc88jAtAfPH33wZcnNeHQEKst6hYUw7Kdv2s4UpVV6jjAReDs9LkQd6pLAwkvGNrzB8g4vkxNbkZeA6PQksD",
  "key10": "Zkehj7DChaJid31enE45R83TAgD9TdXptz97syAXpjm81pzCurUJpd1oWm1La7SAScyAWU4NrSM9orG9Xv2nSzX",
  "key11": "5ejutVv8ELZzjaLiSgbxDLKrpVHy1Cbh4SPkXrbx7pFANr53Pve5CsCNtDNHD1gkU9NpoR52hHXHMHUm2StizALT",
  "key12": "2vLQgmp44GrKVTVrU3g1KU9VYqQ8Tyi1Yvg5aies9yKYLXNZvFNeTbiVfxt4UMsy5aDrGTMqV1Gj7gHYZZmNNToc",
  "key13": "5EzpyEuVqyJmEvTsCPR5ZbT3PXAB7WfB4X88tFQqL2yTF9qq31d1smDig74yJKRSRh3CGuBMeDVJcQdWFdbMmvyp",
  "key14": "5WxMwKHys8VjQkbMDmkXQqeJTEj5DKApj8t7bqTuPdmQfvwN3DfDtx8nNyU6fnxaKwnej9XM3RehAVyRFCo6qmty",
  "key15": "15PdCkmQfHmVNkNJsunPZdRvj1drDKY95hresp9RVAYo1Qfp1xSSY8ZsNu5XxvaEkqi78wJaFL7ZMgfsi3Ptqzp",
  "key16": "ngogMqBsNAQisq9uoDjAxdRufwBuEF1z3epwfE8gV5xQGbXCjh7hHmKiaS2L64TWcrrsQNCxG5Jqndogzkw29rM",
  "key17": "3UdhQipu4dxCwGFXkZzv5woxBjwkUe1ymGM89YfGgdrB7DMxuZsefp6jgfGMFKyKDNPN5zVT6LXFBMEhxCBHNT8x",
  "key18": "2gPFPW7iLMNmRsF7hfBQoSzRMyQUaZx76opdHqUbjkd4q4xk3Bz3F6SxkWy34HuRcGYVHAjf8gDmhLoXryNF9euq",
  "key19": "2MM4CToBavFht7MH4C3hX6HSsLnx1Gw2QBzyD3ktyuitmNpYELC8td86T52qkRLw6ksFc2nFrWxVDGwmzAUdZFak",
  "key20": "66ywh6AM6FoKvpHNnUfHJbhsDNgTpBPMRyBUMbFFUVHkSHT9nu2vdRceGRFpvX8cWxHxErNdMJzgsPaQ2dFdZt9y",
  "key21": "2ZhQVVF3xSr5v89MbYjqjRG3sHoX1fUz1ZoTrQoPUT8qp82fysHXZzLAPxrvUtW3YWfVBo3pwpDvybte5u8z6V3Z",
  "key22": "3uArMHVJVEFyzKVgzWCZJ142gx9EXSjhmRor4okh3zbZ7ThihcivqLLYiSafFwyh4VxtMda2H5tgjPixedpVmWrm",
  "key23": "4viedsnVycviqe5YGUXK86ZPHwJaMo77coLXdT1T8WLZ5FweQYGyGMAgJgDH2RHDU8pPydgVbJGCDVzKCocJmLeM",
  "key24": "5ab6qc33mg8zGsmmDSqB48n7tJMdQ9DKoTHCzDK7eQhe2Yqn3fSiDXgfkkT543b1XMa99XEreheYJER3yxy8KrWb"
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

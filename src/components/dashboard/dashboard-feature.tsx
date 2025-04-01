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
    "21f42N8sMk3V2BrKyNQynZku1VHzQx6b3Cqbkcz41jRvj6mXKQk2hiD1YocuKQrF2vV4qeUVcFAWGmGjVeYwR4Sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jtX9qGCf4ZABrpMPfNf2P629dWCUakZ2QKh57BYLmriekyXQXK3ULtpGh7j8W2A1jnAPiSYhi4giGGjo15qtnfG",
  "key1": "4oPrvYP3qkmTMWbKrDiDFVnNyWj3hAKof5CbkFagVV2FTkeUKF4ZpXJcd6EEUWFKnyXh3GPt5Tcjfh6THEFJPg8q",
  "key2": "51E2EXxAq3Ed2sfxM2Wy3brt21RLUA63fBgRN68t5zUz7PiFMsBr6pD9VhjmWf1BdgCyBN3Kap13YvBcub9c95Vw",
  "key3": "3pMp3ePWUSFjNwc3cBAuynAUHaYaJoWKpuU7JtLJFuRdwDts91PMzATCw21m9bM3mj1TSjeykL68JozKjSWEg5s3",
  "key4": "2Q4gqdf12yLSPdKj8wWeHNoYKzGvEY7aUt8ho1Bm4bQC3EiJ26GpyRtHswPPd4LjaMxqX4tVaeqYEncLz4EMz73R",
  "key5": "3Wbs4o6G4oT2UWC49CAWLwcRtu6ATa5SG5YYQ1VaLLwJf2yUNnupgcsr8FDa1aAEiFFS7Lhjvz58VVeze6rSUbgg",
  "key6": "3ohdGYvvA3ebRMaqjMHGaH3vTQDmzBrhWPPhzcdahVM3w4vwMF61JeaWJTuWQJscSvZjAHnjg7feoo5U8FNXC6MT",
  "key7": "4fhzdvFtKUuNPoLBEpWJvxpsJUbMus52tPYNjcCc4ucg7cTrhfFR4BhZf7Gd9pEcYgmfngbYAiJuRrxVDtw3SeSn",
  "key8": "XdTwQWZzN5U4YMR2Fxti11CSMbBJxXdfAQNkkNUffyvuWzeKy8SuVGgigd9veX3qy9pRwnFVzQxujAKCh2hfGDw",
  "key9": "65CHTZMbCmpVXb6KC9DUwLFTBvDXyZRxa786b6b5Git6v8spxxifMPnNqauURia5hwo6LdJFDb9frD3Tqm7uRExk",
  "key10": "acy3x9evoGBTX6zvZ7H5QCMuS1mHFZLL13TgRKzPhHcwDgDL3FR41WBJE46r22MzxeauE4rQEsBJ2KoVXbmJD74",
  "key11": "3odrjU8w8c6eez22WqNPbVF5THwWq1TGvuA8HrWEmgcb2M4tjmdSyf3yRMjj4vJb6w7YnCbqQx2gotiCjZ2EjTTk",
  "key12": "4NuwYPPPBKg6ZvfQCD46h97XbeydKSMssvCyDxVcrQKdCFoJE4YDYtqkvpoYHe7axpUyxRnqQkGEG3tzMrYME6rZ",
  "key13": "2i6szt9VjKgxvgeP8KbMhshCzHTr65zRiuV5xb8F66rSLRhDK94a8AaBCkfY4nHFA7nnKZMi64e41doWW76fXihd",
  "key14": "cmsTWcZ3uk9ZgpYPuaQDckCx7kHJQEHJ2Ut7KYkvHSTdabNzEwDGNKWWDKjS6k3r34dZv6eGV6SsCgfgXS65FSz",
  "key15": "5yVwWVVghTNPSDpeLYWRmu5kJ441p584qhMiijzWpaS4QvPbvf5WCCiZDwCH1MwVnqsQyC3F7scENpwLMQAjeaav",
  "key16": "1szytMZTsfgm7oNnUKA449TVvQm39NaoyPrNdnLw3mXqmSKaqwtZ2TAM37bVSYhKA6m8o8xT9ZkDQ2BM7Se1FhJ",
  "key17": "4jTFDaTRui1CbQszy6PLWJiraHTSZoUE6nmZ7UFmBoaVkmHLMQxiu3AEQ6zjT57XwHS64HuiTGKY8eXtRFWyrWYj",
  "key18": "2Gf997G91nUHU9cUukyVKsLij1PfayDXNWYDLcpGefVVPE1x6pYdGYWozYdmteiZJ2Nz3d8MuD8LrCNm4st3RVEK",
  "key19": "pmWX1J8b9gw9K4oVHjWWUcqHL7jVtmJJ78eQR5g34hdwgPM4DVsYVzT1WSavtBzLoqr2cP5NTxDKCHaHiQh1ZtW",
  "key20": "4gCJa32PBCxDHba56hGhh3xNqP8Pe9ctj2NDegzJ2p2utfpp1mNoac6Hxj9vcCMAiz6BtBUf8y8iFtg9iaQsQY28",
  "key21": "5D6DK2MWHM4fta9rVmEr4dRx99TCdz74s4rGgZRmEBXCzppeHMsUokFvaGAoKUyeJB38Nq3KV7LUVfMRXwWtKSsh",
  "key22": "5YjNDnxCrKXnEUvQt7tZXj2nGgcGYmv1j5b3TWcQ8CvTPt88pbeaCmhfdwfQg768CVcuDmDZjX21uVipGdWzAywU",
  "key23": "3NE366zi4WXMk5dUU4jvdSnn5yPBjHhfngkW1ixq8VW8cGfaZZKdy6NAyAGAJ1ssPmqgwVanGFk6xwKcciBX33UZ",
  "key24": "2Bs8nYXZtWF34NqhhmEyzU6mMGnWipeE9k7hMqevWB9vWgL67WHEdJSSbMubsmvruc5pBsy2ojvBF5f4U5gRz5f",
  "key25": "4Vwt8vfCG9pd6dgSsqn1wFQWbGTuwQfAxPNdoaE4QemwAr6YxVeb1cWYx3UA6rUUBJWMatrBd3xhjCCBWwvgdd8Z",
  "key26": "5fTuG7rt4m2D1UQV5DUxdmyyh9XMb8zUekmG3QguaiPQ3HK1zi6STYTSn5mjTFdsf2C6ipKkndKD67vB83J1jrG8",
  "key27": "5oDjs3moXFD5HW4bdtLFtPbHRuQbDeR1pG9jfCKHQXjZ9FKNPCkvBHbCA3Bw59KTYuij5fypWfdzsZF5m2XUEMxo",
  "key28": "5VEegWgx1zzh3o33sjjnRFLzZaGB4p5Lro9DV7vyMtFq3MVFzprxv8TNNGrW4qK4SVs9mU723Q9SHrjbx5m1Dxd1"
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

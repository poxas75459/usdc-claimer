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
    "5XxpJkmSrMnH1LuL65tHeV3p22BNQQnezB2uUaQeq9KFgBSgqk3SG4sKwAiyYkhg9Lr45CVmSpLvVQZW9DPGZPva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A4kfQMGDR9WwVBKtMkc3atyZYn67hzykwC4eSTzRHZifTrAsLYjVJa8E8JNxTLYjALYAN1A67kicc7USRSUjrDC",
  "key1": "5ZG8f7KZAUQXCJtB183pmJpYDhVYFs9UjMK6638RKy751pD8FuEyLW6tAGKjKUpKXuqngEi9aeZb36hsPX2mCerh",
  "key2": "4ohLUEDDC3Eh8udvyBswNi1oriXULTDp7uL1LGLAcqyu3i5E7GwYbCVhQVKvMQcRGKR3rhhwbf8QNaguM4xACGsY",
  "key3": "5jVKf2ryQJg31jnpAD2He7WdiPUMP6uXc5fTtnWAcANzvS5JCFkSX7DK6bsMDducgRhypY6McEYkbrcxEiwPJuCF",
  "key4": "4cADZMqBTn6UfEbSBFwMaxehZ5AXeK964Kn95DmtyNrsmALv5Q5rnv2ocw6EmjTBWqzoPmsWCSs1XMFkJWJzAssg",
  "key5": "3zAKZwAMr37wZWMJKcUKqTsW36y59hWQfCp9SD3PTAoMpDbaP9CuZPBrp58rMm31zqXcygNgXTdZtem1Cs92gDVK",
  "key6": "5mdpdLRfavuzRpuq6UDiox9zKfF6gfGECfjD3HYFbdCkNpvWw23KG7XAmoSTavpkbdFDoBBHRNZfmLR1imdSbJF1",
  "key7": "3U9rckM9ZVUKncUa2CYRM6B265tzSH2NfJ54T8aoHkuxbv9iFJ1pBMfn7ZXfurzooxERGAGPt5sVcb69LQFpXsRM",
  "key8": "4jfYbUxShzx3Uou7VjptboJinDA85Wc5Hm7pFPiutUT22jBuinsPgHush7NH1c9mpJGVnC3yK1m9X9tTPPAigxXJ",
  "key9": "5fezGN35Dor5qTKt6w8cwgT4twBmHXjcGycNPd2wzSN1x48RrfMcNuWZHmz8siYJSPpEFK9u38DvMwEVrJuV1PXi",
  "key10": "38NTDYYYPacVp4iqWe5n2zG2FA41TBbFyYyZtVo5RiJuH1K3KsuNPMKutmPw3EaHiiSa3caCHtTcbbB2YH9dsjV2",
  "key11": "4jinN5MpDFo59RJWMmSqn3FTDeZjWoRLNAXUYB7oWqUoeMTvouBFfTw8exKnZvby1c2k8hTCZrBX1HzfYUqnD8Az",
  "key12": "4KBEsynowHpxFtS4JgHNSziXcXSRayAaPrsWLc16ne3YujoPaEdByRPBRYeLWSGW1ZHrDb8CfBWDA2EfgwzJW84T",
  "key13": "QNF5r4ZnBmdB6RC3fNDAhY8Hk9wPp26nK52jcL8E3ojS3vDzWyCFrMvcEsCJiuyZoLk98oERXnYXG5Uk7zDsNbS",
  "key14": "2cN3AnTDMbJ43T7Nk4PXwhRfRvLftY8xaMGkhj5uD71R6keb46E8GVGM299vozuNmkFcSTkbxENcjqbhHJoYJjbC",
  "key15": "4neSRKV1mkvyqAhSJwWnrodrPLyqWKjaurGdyXsqw9yuJC3SY1YpdiFSUg3xN2LWopbri3ikDsmg1mH3TRhuqdtm",
  "key16": "2RxsgPYMe7TsrQVEX3kh65qfpYs27T7a9S4bKcyq6avYHbGqBqGQeinu9YBPsiuBSwH9oJyW6whJCx4qwZjrkVSN",
  "key17": "2agfgaESiDeSdyzTZRSwMyB3wbRh6UGeNCReunXm3guAjCfvB4gZ1X8seVAcJ7qUyCm2qQjd6r1xR3Wgaw5zvuWo",
  "key18": "iSPh7c9oX4BxPT8ASEmHrNe8MDgm5Zzk1b5E4J94RShc9dPrNw8yAzWrcjBCVDfncPA2R24pcRWwycvGttgYps7",
  "key19": "4B7aHWirXoHmZCwwLA81xqF4wWCKvqFqt8hEUYwC5pfir8diQ5Ys6Bwbs6o4zRgTEgepWK3YSJbeKvUthwzXiqFu",
  "key20": "g4UmqJBD3CbLnmFxdgpsBRH98oE2tjsSMUe7B4jtNKfj5NR2T29hpWKmufpMtyFGNoojwMg93ZT3tXDtC6WM4tS",
  "key21": "5RfYzy88S19epmMiKb4MPskzgNVDKDThs5X5EonyRBCfSKQkTmfa7CcBiC6r8ej1zPoYH799KB5EAKQms3ajAprN",
  "key22": "5F6QZaiyTttaJYVLndbdXcRd6LqNE8fyRALNioTfyHLF5FE8W2jAEd2Srzf1qeB3tcrgAEY5dZsUE8UDQvfcmNt9",
  "key23": "4Y5v8KB8iXi2iNQb3DaDwnyJAjowJziFSsbp99z6mVC88A5gcpmAwpSXHW5qNhsUF6D1Pc6AdBGStfgQmumwCRL1",
  "key24": "t8vfv3NZMtsiEEqVnLiC6697fMUJWytthtKB6H67LG5MFEH3ceQcZyT3thbhnjwh229QrcV3vuiKyZqwVLrknwW",
  "key25": "3S55nBF3i1yqKu6hkoMDSeeSbqenT1KdirYQa24QGWPn831ofYX4PzRw9q37NLwsaCSAcPmEsj7bDFhhxBFz5FFq",
  "key26": "2HoRCvnnLMcNsBHMkJeRGQMdfiaQmAg1PjSftncWNnmLstCwjDsMkmFX36Ka1X74fh8YEvuXeiA9uExuYv71gCoP",
  "key27": "4miUBqkiHLeg3nE9w4WJPPuUV2GpLJSwKydDSGE9qycEhBJL33aq3yZ2SMDpu9jzw7NvfU8thkCKLkuLdyt12EuV",
  "key28": "4sG7CFFDzDeognZ1gFZUZ3TCLD4um5QxF3nxoCNKVhDtsTbi4imD7tKD7FvxCFPEQp7M7JpuuimAbogmHHjJAFXV"
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

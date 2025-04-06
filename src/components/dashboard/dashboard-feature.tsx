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
    "CAzpGsfDp7VZpXmbYq1kgrCY3nnLCjwdsMgbxmGVatRXQFN2Vfd15fD8AqHRRF2oJx3JsoKcVKUQ25zCfGyfb35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bhCvLRTeeHbCJm9zfSPB5DNigXmTibMhePo1K545kv83RFmLdGudFg1JvLTxW9Yo9uA8wc25aKeav8ZkNjcMSgj",
  "key1": "52jK3mDPBybvwi7QJaTKbKyRJPpyuH5ZxE8je7XdJm6DwdpRScJEFj7CjPR3VQJ24dUGCqQp1ku2LfK4wEMc4XS3",
  "key2": "42dV3ye1x1TuaKFPwTWDfnZcmhbEWzp4pEmuRjAdLSWjmJnaK5YBZAhn8dz62rb7k45jxAjHtQaQQDpGsmtBjCBD",
  "key3": "3RkEL7qzARTfefKTbnbSco5AddymtNXbBYEiCTYDhbA7ZKjbZ2Mn83sEt93sr46MTSs17ATU9vrHGWosoBUfnrBh",
  "key4": "4i8bfBadhHCZAmDqJYpJwnbJWR872x47bsPCGKHjhTVr4dAqFQMWZc5h8B7m4kS1H2vNgdB9dS3R14pXpLSfJ8AV",
  "key5": "4ZW5GF2xZeEWyWzMpjWU5W5SK44PbDJiVsDL8ArcQYHxhKHfH7Kuc8BX3qHAty45XuKAijgEYyYLvFoHXhUoa4N3",
  "key6": "5KUGDedPTfQNWTowtGJ3CrCNjrDNra2niMhrLAm5UsLNUcB5nE147NSfpz8hLPhxPSRghMTkKPJK31AQCBQYJf6C",
  "key7": "5uf7nzSWkW9U9fj5HVPRhR9UvGvkKkAzq4xVrMGGZtvKJP1vqpSZVfnvMB57pGLiABa2DGtUTHRehYAXe5kwFsuB",
  "key8": "4BpTwHms3xfVra7KKM4cXbJvM1F66Lv76thRKceVCQMXjbLkCZCSsie1fCvFFad53hgmD143hyWxLH6aaRkCb76M",
  "key9": "62PYv6UbUNgyLX3osULe3vxNi6bbZEDvk6Vqkk6nAFphjzUhixEZJQsJgTo1m8KN9vGG15sJntJL2W34g4r1AdWR",
  "key10": "544RxxLUr4PhJadt5apXjApdRe4kzBrWZBivmQi7quREWxg2PJD4XUm57NonJaDKCVxp9dgLhY2imfeq7yk4stfW",
  "key11": "5P6Ftr4qWJPSEfv8KWbbdnnNJwvH5cgNmaBsG5bgfGZwUHQrqo8P7WsH48McKz4xR3R5y8aSaqqmzwArTgcXaSPt",
  "key12": "63BvzTRYKtvYamP71QuJCQ3DGGKRpwS238Xf55G1VaRkRimYQ7AvNnLJxngnPJ8Gkqne4jZe6yttTa7q9hwSbF9r",
  "key13": "4GDJUBMW2xE7SuUZv5thbHhofuqrnB7HLKF8WvBA3ZC1U381fqvwYcZ1DXgeNRq2wPmbfrX12RhKTPffyfbETg91",
  "key14": "3hxXBBwKTVVbpqvSN2yEihEvfNWsaCiLu4g9g8k8HY9mvkkqQqBqH56nwAxZGLRU4XutjyHet657TtUhrbKhKDSg",
  "key15": "2DvSQ6immajVvU5H4Lb94F5wk8zFFFNH2Y8XkaAcVVzhitX57sRLEcH1Uf1BGKjCtrzh3zakMfRRuzvPrSMG6UqP",
  "key16": "34qYHeu1MpzMCyK9f8Md6CGWJE54XPCemQmSgRnLJyDMwAdzF24ijM9nJhJ11kXV4Wwv7iSnKrHJ6VbJWd5FUamK",
  "key17": "4vCeJTij3pGVXEZ9JeFMgvre8C4GC62qYBhitK3V8P6CuxjcXZBTDwkydsH4Uky3cisqbRAv2c4cF68QXXWqbDoU",
  "key18": "1B2P8wtSuHvFRt15mxMh3qeHPS3JgQCHbZDUBKCVZ1QiRZD849fxgCn63cGvtRfXFP4Cx1S1cKoAUqroC3r4FhN",
  "key19": "e4cbRJ2aVxNeo3hdywmeLwNpYFa58uhLka7epgr1mXrazFzVuFUdXeu1yHE1GqenGUEuGBDdDxSqfamh836WQ48",
  "key20": "3D2kHbv6q6ztRM4CN4sgTCKXrLLEARhir56v2QdZ3CFTNVgKgDsZ7M7Jb5seep7VrqC1jjoBf2xDC16KAkD1vRi8",
  "key21": "4Ye35BGUQXYSb5EjuTwnzmVkVNDH4a4GxwYtyMWVZm51SdkJUCEgpeQaLe6p7PehqrU7aEX2WXE9wM1QYdvTFBxX",
  "key22": "esAeSM9Gp9vPEGeLqCC4GzdRHZ2aJmhVWEszpXex4FXBZvxktEaegt53agGD7zqtEQsndzq9QUk7unogxbnnqV3",
  "key23": "5nniyAVRuzGCPRtboUQ3uiSQ9A59yuHabwSnqiRa9EtEXRXfYL37kBB19QPUve1ftHAUQkizPk1u8tW38bZMryqq",
  "key24": "K8sasXDKzKm5J9RJPep7nbUFTbGFCwksArb6DCwoK9gMKALoZ4HbJu4HYkaSUPsdWYUuJBqcMAxNvtgqSqUV1MW",
  "key25": "byyJ1nssqdj5BSDRFWFQufceBdJBLwW1uhA67bDinnUaAcCkU98ZiXosujQUD2c45xwGWoXBgZGHZU8Bj2t7WY4"
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

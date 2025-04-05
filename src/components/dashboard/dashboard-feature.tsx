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
    "5LCBrjnUfA6fkY8r1vwePocqjgShFwqCjLDYpq9A1xK5o2twpFs1CyUmaThzA737pQaqMCgJMtQ2FRnifi3TepVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sYnynLfE2acDrpTM34xXxQpac8XtNi2MKsvYVxwaz3adn2zx2qV9ZZUEnuyStqP9iM8LRHWvqkjhG8zCwvvw7hE",
  "key1": "3AxCFnCoiTqbhgCKeTW2LUKafqEspQCEmav48S75oB2LtV6eEg6sLfnD41oLScvg4y6GY6bMSbtifWnPDRDHKt41",
  "key2": "5crofurYcZHZMP5KGGLJmipQpRprRJgKYa5mdTfvQumXRft4GHMxC4tTFFHTRVJ4rpRUS1hU5PfxSrTWBWSWiG8t",
  "key3": "4mV6KDNR9NnmSC9hLTeycGDNq4AHL3X7mYgdVELnKkDjHQBpFG1hAwB1jmFcss2Xbj2HKLeQZVFfMS7KS9giYSUX",
  "key4": "5mp8MQLzWNwtJkQdGdUuzgtRakRuiCWMaLNcZHqMDQpUqataMQaDv7eVNq8D9g8DiWN5K9qejywjJQ943btsJCBD",
  "key5": "4H6EEcHXEtr77Y9f7QisyiQ8iBUPKZqcx65QMicRr1vzFJBb26vXWgKD6WoPE8DekNpeKjQ9GShznmNXdqrtbnvm",
  "key6": "23unYYVkKEVYyahkTZtumuvThiRx1VHWGUpvC8B9oGVkVjT44V7DTtQXkVH89St8UZzp5w6Qb1DYmbgpc24YH1jm",
  "key7": "4EjyrEeTsFQNuQRxpHimFmfFg23WyTjX2GzNQasrArjjZoQebQjobcjowt8LCxDyMVL7SGLGFXfQoeYmMdhCPVun",
  "key8": "9GCYGfMhuR6UuE9kjciJuzU4Gjzzv4DXTDYHMHnNiSdQjCj1Y1fem3meVrUEsJCaqUSK53WQVGbBgugDuTPpyTv",
  "key9": "4X8562AghiLob96pf344MGPEgxRkk8BMmGvZ7eDXMLvWpKYwJmLhDHV2tdgzhmNt7hvhXYDjQp7ZEh7zGpaGHAMP",
  "key10": "3dhtKWxbPJ6CGdvEPUUDnPwU2MSR9JQBPBbgfwnXBzrVyFvNvCnY9fGSXT1qyQC3tAQUUZzfVfEDaAQp1Gye3pjj",
  "key11": "2gssh5ugZgtHSwLn9xDqC7jhAXdkMjPByZg4XnjKAyo5oEweozADeavst6F22b9oHFF2Zjy9cMQcJ3GW4hVvLrWi",
  "key12": "3sqPEhALnRPAjdoiSjZRNnLAQzY36GNkVUTj3B13U6Zo2PhsDAfpjU49QqpoCqLuDg6c2UrCGWMNjkJLhxqoZY66",
  "key13": "5rch1kWgrfjV1r89c8A4BvaDygsug9zJoT538UU8LtQByzWEAe9B47uziGGkqyPpEX8WkxBcBevdbwcffD5oX78x",
  "key14": "5BMvq6cTR6y9B1W3LWNHHLeqiHnWUPsKNbUY5G9E3n9fhuf4jqVGkaLMFF3DH1pGMTFm1adgeTQNCNCG61dnMjvS",
  "key15": "52V19vLcgcpqZNd42taUudeV9YvWQcgYLPi3h58foNaBCoUt2VyTjEAjKdYvbTGb6b7cL7ujhyV3rDK1CRFgCXnH",
  "key16": "5vJA1drpxzPeAXD74VqJP3ekzCF8RbMNQ83GqgUgjGto84AW4zEDV1eyV66zkADgt42QAuaSwFvXCXHgfQLQuX6p",
  "key17": "nzCYiUwn3zuCnakCL6SqCVEijZ78mYG69Z9j9tYpFM8jPEmnJXpAjgksF5hB8iGiVExc6zgqWZPwJBBP4tZn49k",
  "key18": "3ZJFNF1BZ2Z7QQhrNXPGNs2n6MqpQnuvoHmbcnduCn1fmKZY5S5ZAcasUMZuCdaGTSg8bvJXnM5eQuiBnS2Uf2Fe",
  "key19": "4S7ZmBFhB74D85qbAodzH6wA7pjwugKMokmGmZ4Kps4UN65RY4oVaLZ1fuKhuvWLToujM1JAFC5LdZwh3ywoSeC6",
  "key20": "2vWSAXH7M5nTcs8pMRbzq718iZmZ58TK5pKQh1WbdNF1HirHLG9Q3nnrQieQw4sBnDmtsTeDC3nXa3oYRusimTq2",
  "key21": "5mQwcJSdoEU9wttA4eFRbUvQcn4n1Gt29QFs8RYBbqWpwW31eCUT8oFmPJUojnJEXsGHNLMce2WwVuq69oBVqb95",
  "key22": "3Dqn5VJcqh19QKVADH5UgUKhenfcBG11Y8ncaGuYCHBdxp8bMXNGBMWYE33nKYTkTDosf9zU9C3Y13bNma75SdRv",
  "key23": "2mVbfVFhf8Rhq9khTosZvvNp1G5DeSo5tBJVLWJCc1d3BFNFJc3FFQm3npiCidb9qEq3rxDevbypJTZtNu9Qfr6s",
  "key24": "2xW4SMLvtR3aRWiMnALqpGbq4UDSgtC4Pg8zJAJUaMUJ4GP7E86SEi2ReNLs9RTqkNbTuDE8eTkZjGboXBhndbyj",
  "key25": "3CXhDXn73d5u4UaHew7FmuHNScfsJ5YPXCeDvjiRKsPnhRrp3CMb4DVFpZDZaU8bHQ5qNgsSLPJ972PwsDuaWMjP",
  "key26": "41LG8GkY4XTCgJ8JZwmAQ3ZiTrSgzGkS4PSQhZN1s6VZf6NkMiGzQvpoZKwXxBBWdBK6PvTRPz8iFcVHyUMkLGjC",
  "key27": "4rTnvSGekhiEmEpbnPSvFzY5Kwg7Kmq7oN54zrMj1VCwXKzLQBYdd8QTZnb7CN33owtXy2Td7KSnfZUWpHTmwSCS",
  "key28": "2FnqHkpD59qhUHFuhrW7B1DWPPA8bYaRTvfcE3ioaXafbvF1xADPpBLTQpQJf635NsV6SMyXhspPSuLaeQPaRHci",
  "key29": "2HbknZFQU4gRFe97G9kjNNLH1J93y9MvFCzvAqRhq1fo5rN7YksE1LxrTkapWSgvaXsFVXwCmKMMuD5mkW1isjyT",
  "key30": "3tKUpz2qRHSyAET3VZ2JTMmpSnZF1ZdB79h8qqDAcMP8yvoUiNidtKwzGSdnVp9hXZGHebTmGodUMPKkdjoRRey",
  "key31": "8AXmViVTY8mSmoCaAtF7CmKR8visMF85wBBzePMJDyp6UptFkTDc2uNp68tCnH4G1uvQR48GCXTZbBVsFf7La8q"
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

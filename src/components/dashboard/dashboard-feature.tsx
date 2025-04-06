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
    "3eRXFrdrmyn1jqp1gSFhMsxmx1P3VmbhipXoSToN4VBV2Vhc8BH9dA7YpLiQGf2XTcH3jP21woWfCk9ysV899BV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZdMFAdv4yFuaqT7CQDvxfN57zxRz37wYS3LPNkHD79PmjoLJEZNQLNVDy8Q3wmnakTmz93bvrEtqswPjQ6ja3Z",
  "key1": "2X7RYaedgrgmhY5RJaD1oEJcrgC64UbzhvCNPxBufZMGqFpjnFp9bxcRAETSPZ3s5XUqiQxa6Wii5PWR9Y8PW2Jy",
  "key2": "4dTCnLibHgez6twduhV4d1r5QHZjrewp7ag2T8SQdsxUkAkcdrLm4r3f8RAwXHrhSANUM27MgbnxVcXiLtm1h1zR",
  "key3": "PFu5jvaDxpodnRqpMrGq7cGvjxn8aS5RPjWAfMWiRPTPVsEy1d6GoYR4dc1Ct9KL8fAfn4g3Nbcpt7p33JrrvaD",
  "key4": "4pwcUhXsH4VikPPrxSvJb8BHx9BghDhJifncSF26Pq1panBeB8ReXY5yw9y5aLo3xVRhNTVieCvcTJ1CgJd2hFBV",
  "key5": "51oCc5YZy4PbhdYo36RWZsnYRbAN3pPnndiXPRzhXWMENexSr5N75Z8NwTo8eR4PhCxoEhTsBCvqifYhNUaEbvwB",
  "key6": "4JBkCwkn5LEkjvVkPscMQUfv9J4B1RK4PRsnNZKzgzicBcpW7rsHqYDh8ADVwz9DdrhFpu3AZFQkPBeByjYPZdgY",
  "key7": "3ZQCWw9SQTBY7T5aBG37gumEVbV3cfP3izSNmELbPvj5ZNi8jSiFMsLMUXxWpi4T3ZmM296JYcf1znni9KnHfwWw",
  "key8": "4YqWbyj5tFJeMcA2BwhizcZ7BXy4NbonidNgojWv2k4PmKhzhbFy95PmSoVQsQcvSwmTWaLq1pAtgifjiQnL7yX6",
  "key9": "uaAoXcvp4wAihmycudpE8d4YZBD1sP9fyxreQqnvXZeGLdqvS381rDu1MYWHrSpGzZ6Wx85eD1BKb3YzbofaRqx",
  "key10": "zCiXnmEbeGrUdumc7dpJkiBEVRuQDjWsr7oju94MTHPNSpuBgQNnk4uA2Wc5VBXey8xYHmePnXqk7J22zSHNaiW",
  "key11": "4dmyJp3Ys52Z1hMDUyDduTgcDL1tesnAyQv6NoCsdATLizTEMswZdnyWjeZ2Rpnsf2QNiBQaT1FcWMGiGZ4cvLAH",
  "key12": "2A7UKyjGm4yCr4Dum2Pdn2HQ9Rej1XxatfbgiHsbWWNNKT8YsvqbKVS3ydDX4zxF1ERLhFgL2QcYdRGtkSSaC89C",
  "key13": "PDPbvRSruiNGo8MyjirS2XAurcZzLH7dGbf1HVABKV4HMVNMPpy4YPoeQhfuokTXwPZmPV2jy7FDSsLn1EQqhgS",
  "key14": "3U5bFTix9Hc2uHQ7E5FX2tjaGpY5XHJEg3XjVEanibWSdCYmiBD2e1YPxjmaSEnDNCdvermBzUPfoL8ggxig7LZ7",
  "key15": "5CK5j51gtkE4bzuvTtwQPXqTi35M9rrLCjTcLKPTYLmTLwxhe4VoWtpGLm52kZLWXeeH5sNKdjfJcLAX5635sZPy",
  "key16": "2vhGeL5u3Pb5YCGT1iYgff7pszRXFDiKxoWzcGEHfa1HXnAJdwK5J8AEsipKw3bY8PA1QcWhyJ1CohhZKMtk5d1h",
  "key17": "5t92xWX6n5gz9DN9PACRKtNJbxMjDT97JFcERBDrJopxb6c2c1LcJ8AeodPQbC5thux2Az89MSRHTMdkmXuCZzUZ",
  "key18": "4T2Z2F1wLBFqaVAzMUUw32b8covrxPt6PobQS7gJpit6RkotCjbT9bcCBm1Mgrvz4VgpTZmDxThSMCHhx4NarkU7",
  "key19": "4PmNBrNxaCs8WSbnAPyVh6JF21AaBjTiqJkihyQWqdrF4n6jgrwc2uo6bU7U8BeJRUpdU3t1iptgJc8zwVNmCC2P",
  "key20": "2BqFQMaAnt5i6nj8WS3spZjztQHkCV7J9sUFXh9uQNbMre2DtdgrC4j7WrrBAg6sfxJz3aJcDXy6c4Jn9GkQxJRk",
  "key21": "4R4Afe35KxBTHde6bPm1AVicLtjMaije5SB47N7B1WXhZWxg5w7sJXFYQ9mNTyDePVV1Qj83ZXvSLTv8wkQBuAqh",
  "key22": "3YEuAXuTTE8f2k3jtu2oJT8u3nqgmXdWXxCyZ1FM8SnG23RX8fa1GrATn6w4AebiF5KTryvW6A4z9DKB1AS6Vgo9",
  "key23": "66htpb1L4KRSn8PM4sWJJZaLZuZWzsoHBscfykG78FEB4m6AGnkvbR5oaeyJZFjYFJpcKfAVTMtJbC9s8ohgQbAT",
  "key24": "3pHbUBvwhFaNZY8KssnqLMh8aeAF1MgFmfd6MsJ46nbsADGjZMg1nuhuSB2QeVnoD2KebYy2skxYP6AgBR2kvmGr",
  "key25": "4DWbDwUa69L5fY4Tvams5bmhmKWDjkxzeRCpFPZFvByFMYt8HfvPqy2vd3ffq1Mes5HuLs8QTHG1ZNX1Y9kXPmKw",
  "key26": "449DKbcNW9MEbHmVyvfZpWTHJiZbUnGwrgLVswQJR3Rgv3TeRnukrt5xFCfWAKKyTyiMgHferhvnJfPQqf4ybYh",
  "key27": "3WNpHnsac2hkmhgjpuyxzy3GuNBPcAMzE5kBfZJZxNV6ZfjyGSjgA4ZTY2Dy8aLvNy2Q94Y1V4bdsGk113n6zAug",
  "key28": "BhwpqQv5Ej97bK2RCP7ozUt4TX7K4JTgxEqwmESdTbdthcCpoWsBwqvUDTPnEP3QrNDkjabUeoXBJuGMBh5pTgY",
  "key29": "4k2VbHKyKag17AKX5G3pkQbKexBghhDgs76vTFTEzKQsSf8sZ67VAKr1JPRofQ5cSnzZwaeMfEq5mGxhFNAp4Ku9",
  "key30": "VsMGDjFJLjsg4gQh4YKiUvkmuno16ws6ReniWiQLUoKPoqsZfk2FNTf8rgSgGiMTqsGybhFNqXMpioEPnVXuox9",
  "key31": "5CZdzMXZY5wit8NbdyQVfhYhsaAd6XKRnuDMGUP9qQfs3uwna5tE7Eqn7GHgvAvqcGq6rXkfhju2974y9oz9pxX8",
  "key32": "AZRVB2u9gCPgW38ARudJ4rui1CY2CqEFTH4eFEkhLg2Y2Px6NxszPXLtC8DYjdVkW1SHgzc172NgiGUekpRKXEU",
  "key33": "234295f5RPEXEUYfhsWReJdqCozrPnhFehKs6DJucMHUCt3kinFpacMy4a6BYnm3KAcnikiaSoe3MBoDEJAynLsJ",
  "key34": "ThWrHsibiiVz1BnEbwXK14iqQTFKgX7v5CWDAxeS3gjc7p1FLto6aWcURHxU5TysTeJPaoa2Ee87sZYAkNWxnst",
  "key35": "4jSPP1TjGQGdDeGaZJ6HMftMDUULqac7odtbL3wdB6siTsQiyaJ23sZqB1qeKG4TttSpz7ovsFMESu8vfoS7RZX1",
  "key36": "yLRCDThGz89sEHvg5dwTPubBVEPsdKJT9LCPm3oP2PF3CYXtrZ1LX9HfWFVWdK666FNUnWofy1chZm4198Bsv5v",
  "key37": "3Kch4JyTbesMEhBjf37qg9B5ZxPbLQK4JiUpmtGLUdrs2eTkfDegpF1FjMjgrNhGrSZZ4r4n9ij8XdDQr3VbX4dc",
  "key38": "5Bg5wdVKfcsWQJyS5fTqjm5VaqdhNPpkM7t1SD6sbJpjaa5vRZegoxn9sVoUm8epikcDRjJhgJF8hCPW8oHxryqo",
  "key39": "3btD2v63UiuLEUZpWKDKDX6xbaNcZfFcDfMTjB67weKeCusfLqEcXUruLrwrtxLUmL8jcU1vsZoxdfnCAA1hS6sj",
  "key40": "5z9ABAUWzogMU3zmWgL4kAdgag53LgzAFH6hjHNQH1E3SMLS78gmS4UEz7XwPpVhWecnqHxP5gNBmnggwbj97PBG",
  "key41": "3vNrF6xe3Aq9ciNdpaoRZZXjnkModMqNkpYh1KChgyhLfSk71RPCynorBQLXcc9t8QSdCaPfS7b25ZeJxxbsSPxv",
  "key42": "EXCupfHsDAgd1NYqXGpkjLxYQU1Xy84xTYDCaHo1XD2PTzroDaR2mitopJdHiebePGojWnwFg3McVRC3DbPtKMz",
  "key43": "4CWS8DLdcvfcPXPZrNzbQA2YEKDiXgTWYzcYx89esTB1Y6AAPRN26644PTkmseZmeWhtAovaeWheYbjYgjcsNxGL",
  "key44": "5sbwaVPMbTBqaGv7iaF6nx3seCqUZi96GkCik15XCNqyzg8iTcy94n36dGWqAYe9j2MuF3AFSjYiEtJykC8gxWzh",
  "key45": "3sDpm1RrYuY3uJk6yY5tZ9ZJH3SHcpqNdc33Rw9SYVLn3jiY1j8g5NmXm5D7pgzcEoerxrNNjrH15wZyMGTXVoxv"
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

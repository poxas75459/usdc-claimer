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
    "21YmfCoMwkAVHpemD5TPMPTK91MYkXCTZ3FjDTnHRM4cGLnNt3NzMxvdWQK48BMD3S4cM7Fz9YDk7EvLAfLgDzBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HELdMgVjyWTej49QvrgvK6gKmcnr2e4Tx8SLMNd11Arx78tYgQQTKBXugeAUZfSPcSwe7CumYR7pGw6tKnepaQH",
  "key1": "5nrwAys5s44Tr7PqY5bfzT6N7Atm8gSMzx4NNm9j9JkNCmS7C2QsXKkQWgpuKUwLWwhV6nDXkv9bnPeNY5YjkqPp",
  "key2": "5HZ71bb4kaFEbAS38cC81w99pV98FeWvRBg4kSWFNk1fkx2A58nsjkEbRKFqGMDYFk12N2yGoW8pY1hxgS4ofCeQ",
  "key3": "3v2qVqikZRpniLA2J73HvPVTyYv41syP32rTu62puedDkPq2oY7zpKKcVJVVq1p5Mtz6bmSJxj2Kg6eFkD5gQLg1",
  "key4": "2ixMAoa8PVZDBu5KWBxRNpzzNj5ihvtos7LQW1fV82rNDxYK7nn2aEAVZ9g2T1UwZmhZ3Mt6f4xbsmWERfWJZbpU",
  "key5": "5z4tWKSpfPuqMzWrzbVwfykWGZiRyVdvox8NDEZLFxsUjuEjESwXETAMSjdDC1tNjZ45x4zqxSNwXcxb4GdpsSSS",
  "key6": "3C7LhECrK8X832zh391XPCWRFnEMJPtiQxe5Tn4Pho3afSAUo6tqnLsLeb2aJGbNLBbM63y51VWJaDNdRpuoH9oK",
  "key7": "5ZRiWjxoFBPcyhJ2krYpzpd66ZB2E4oHY5PRancD7cnTegroNHmXriNkNJeDRc8DXU41H1r53vrEQfDuuF2EYVBn",
  "key8": "56SLpXfocBGegCQDhLnXAESaYKCUkVR8LN2k49PYX4p7D3Lcf648LDfHnvesDNdRQ4PXRq6CSNwKor6AFgyqNkwo",
  "key9": "5iUtnfDPgMqwaLwbk3rz9VfMmAVFmYPL4EPYjrk281gnkAEspF129SmUShMeXhyvkPsXXXT7MkXEK1W7swiWjRwj",
  "key10": "fsDkyhgREU8R39HjRADtEaov9LhruFKd39Z3Y78B1aRyde6F8ggKRDR7o6PY9TZ5YWPXihu4B5s7xFfw6tp3yST",
  "key11": "bzgexnwXdVECMSsJoNgo5GqvMgyKw8sv8HisKeENSjZNSB6VxREcmogASKusN95dfWVUV9NRcUewd4XrL6MQCee",
  "key12": "75KEpSfkZ3e7f2GSRvXPdMnrddFZoUYV7Mme5d6yNP6457bSG8bZBvHHWjsCLeQxyHtPMUTcbL3mDCBiMPHAoiu",
  "key13": "4wjfoNw3MK1ubhQoqzReC53GxCDxXbQwdp2xkkZgTHQEZMF9GEyxFGmk2xRCaEK7uHfTiZeLFNmwvTaAEG2fkyGu",
  "key14": "j38Q8yLUW8mPyC5CJEhPybLfNkzwHBLr1J6QqhrB4odpwMW4mb7P5MKQgJk8EmFckWeT58bfwHigEri8CWkWfwZ",
  "key15": "3NMRjzQQPiRQVtWaGQY3i7vmG1ted28HrpnRZVL4BWenKj4TjErfvMbuoxnQD11zut3sk5tDdi9ioZqYhwNhD2kL",
  "key16": "5LHhRE4KF7SNDQW6n3HHBCAJAvx8wQhvHbdxFG3XDXrzoexBmhB8BAy6QqXZciSyTWR5TojqoMsNGLEJq5ukQNH",
  "key17": "3sZaypSPeJ6wNJM5H14AR6wGdARoJXdku5pPPLZoeNsZUrwHvNMJMc6of9MizWtnjDL8Byfm7XF4H7idLkgggAFP",
  "key18": "23z5WmWW3TceoApRxEN9iFMWMaByGVXAwA5RNxPRWvbGL5gYb7Qf1kzkRdNuwknWv2RLjXCEDWE3i2FxaJcWK2AR",
  "key19": "53k6MqqkzB3PF6DA3hThUyiV2HX5Se5V2qwSHVRaFNqEd3dBituW3Kz5iC6x2qRLAUKfV8RCTxbPJEDtW1uevJ39",
  "key20": "ezvJXY6bY555WQRCtVyfYswcUVeRqHUN1AmptR34mGkwu5VU7kt2uVQdh241NFviN6Uyr6VmfZHzKLeWnUcPNkb",
  "key21": "3nQm2k786FGnqqtExzAUvtLbVANtUSbTNfV6AMqxuTnFJCdbAkSvzhnYUgViZ1ZiEQQjfAbmTf3m4zUrHC86kTt7",
  "key22": "4Zi1bHKoXy3tjhS3CR7nsDKEmzBy9yyXUGJQsJqQxenaWR4UohQqxZpYtRn7K5axytqB2fGxbXKQbJmdXqUNbPGJ",
  "key23": "4c1dbCeUrFMDffp8ReHTP4VPb3XwDUhero2SbJJAhe8gzPaXAmvXnHmk4ABo2pb1Q4ePbXesxktvFYuhzK5HURzu",
  "key24": "Bfv1VEVRmBLhbAgQYFwZassFkypwir1f1w4jq4pcH6nwDcuyGiqVV8L9cbVqe3AfP1AzuChkQdYvmYjLwfpNsaD",
  "key25": "9LZEpuWWf5yChQb78sWeuAv8vGnae2YV57Bp69e1mCFwLCgRvpWKzxYqb5EhQWoH3ZRvC6CkrQgD3QYWA5KCnnn",
  "key26": "5dFQRqSRZaqfUfwR45GCTjh8nAo6XwNX1rm8nPxfSmpkrznRJxRQxXCGMLQQXHdYoYJpkrVWR5sp5EiFRymNp4ga",
  "key27": "qKLNVtSqs5eZcusJnnrP2p182C6ejXDRbR2ccWXXaJoyeb4LB2pvjrG8RYEqhy6SRgDRmZ95HCajKaoVPRPfZ6r",
  "key28": "4SCW1baqV3YGuNefYP236h4CPBNSSZM7L6i8aExj35NCK81xTtjfU4VkpMqszRpPeFE5QwSoYGcGV4p9kovnaZjm",
  "key29": "5yBEtraLQhmTYVms1A1PGXyNaxcVhfc21Hj7piJuZuWsQbPTdhiUTYv4ny36UpnQLYWTJgSMbnSUSoKBpuDnAB42",
  "key30": "3pg46P14W8FoB3uKjTncYGyGKBrTXZWguhdGZUCX4vKdodmv4JKBp8C8KbAa7ejBqiok2anUS1eK6xTH8fMp95xy",
  "key31": "5N4jKsaSAp9U9ESYtWix6gRSBVW13VDVDesCd6bqKge3aQdQNy2Z5XMAxqGftGVc5Gpa65hedsN8Fef9Tmyy6MGC",
  "key32": "52Eb9WuryB4t6TtrT4AzLg3YND13xkngn93KJKbPu1LPbssz5Lf1MZnE9E7AApWyqwqFusaS1chrkLv7SkZspyYT",
  "key33": "4xsNtdc4aeYTuMNn4ohM99Acofq7JKKHUbWQ6cpxfQbEmT4BZZx1VHqi6yCdfzgwFWsWMiiaC1VZzRoGRkimUeQa",
  "key34": "48tyiB5H9EcktrhtC45ZsJHwppjLf2AS6yrnrwA6eRF6V4txshabiQsM9PiYxrdDzvW953aBdwrJCHqTVgohENMW",
  "key35": "4uGAhxZ9yaLxy9r7aN3UxtMN9n24MxRcQmWP1YnMFLw1Kxki456fbCFEDxgBzsSiDd7my397nTR5GVR6oG8rkfCd",
  "key36": "22hM112k3Q4ZdNfJBs5EX2vtdYr3LD3Vr4tRSqibxMhdMd4b8XdTZDkQ6WT6MC8PpjUuVn4AXmT1WXcBRZpjy4TE",
  "key37": "Uxuxn3dftcujGSd8LZ88dNqSoamsWr3ENpcehDtNHkg2W2HGT6BJ9pWBsbjiWSTTzjDuwGSJYJ13YVFqJThgNHz",
  "key38": "3UDLVUupSVVWqM37BDaa68tHRoCZvgScgdNDVsxpcFVMAib1qL4DJGNsMRwdEMoDDuYoH9JryKZmmrYr2eAeZVv4",
  "key39": "2TiGfoq8KSVMBuQ85fhazZLwsW2bffCtnk9y1fxvtxNo26j3KC7YADN1FupbnepzztoBEE1KJr2dTgLQunjrJz1A",
  "key40": "JsnxyEyUGtP7iDM4hWJJioAJJRVjwr3SBF1VZkDRXCLXp1msdgvWXQ259y5Cz4Gfpeb7bAgsPKDEGjUhTiH3tDM",
  "key41": "31tRZ5wAAnWtfdrZNDrfRSuJXGUqWT5DtacKfutJ5NUNy7Bsgjj777X5GTe2LnSNCfJMSxsS1KxnWA9X52oumgyg",
  "key42": "ByVBDR8x2yJ6iWtLH22TdsdXHYncTS2oUspKb98hsvjCQwwxaW8GHTNsPRAMf4AbstNrVYWqC1XSLXkTtS1Dr94",
  "key43": "4bZNK7pPw7i36m8DcsfdY1xVQehxBVeGGU18hLNQXFiErW9eDLZ2YYwzhGu6DjaymqYgwqmCEDuK2pzYneYviGv7",
  "key44": "2ptKDL5tdAskGNx1u59UC9JQwnjRedBgK4nstrN5L47K8PDAKi26dxA9uUAXctC5f5p4dtFCaJrRW5EhUnaZYBNM",
  "key45": "2htXAuYsijoTVhxgqV1ZrKQoCNqinaJiYiwPNod5w7WYvZPNP8Vkc7xUfTwy65FLVXgTCoskeiekbCM11Jhr2Vzp",
  "key46": "3Gua2YT7v77rhrw1uWqGfSwnp7nwLF6pzfPwh3NdrsELQytd4px1bM9DsNEpwVunnrU5UXPkQTQQJg2iEFrE3tJX",
  "key47": "2oa3CRkY9MoMK1xJM4iySYB11e8KCaMYbD7rTxEhJhv3gBWSRdVaYqGCvANJd7Jz7Yc1CMhPW2H4AavQ5HcFmxp3"
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

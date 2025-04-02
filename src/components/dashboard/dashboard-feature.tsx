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
    "zYTERKbByc5TVncYpMGgmH8BNxC1Mi5Qvdxn27YihQZYHuVnkxSna1ABYUcbzXMe3Jcgdufs3TPbFueTQidNUxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59SmQmNEgqD4WqJgTDRnERwUm2SdLnBSpRwS7rxqvd7Xnz1apmdPLcEkL2oXeLheHRSZybREr8rPJULY3GaKg87L",
  "key1": "4Apn6CCicGQWVY8UFRDajG7kauChRAfiPu1njoy19YJCrGyvEwRJeWPBiJWXpXf6PL4omRAsv9sKZyPitWjygoE5",
  "key2": "j8gAvZRdkkXRybTztebNu2r51wYNwoZDBzN6DR2R2VX6dfd89F9wyRt3Zj17SiikJaZVAHjhJx6wMkZ2cPmp6U1",
  "key3": "cz5LDKx1TRT2rJGeprit99QL65f8NGLbdjjuCcotfAs2DdqG179gRmSNc1GzfwZJWNzUHuxwnyR2Y4kQNthdhfP",
  "key4": "4mZBvNiDNXFgZJoeP8zA3z82pqYkNDDMKbNWfvK2iTmzjHqmZdvXtrcFfd2WLwSXqZFxLjtDCBzdEuuJHCcyfwzm",
  "key5": "469zgpMCBjeCZNrhoHUFurkqZjGwWTj3XRmmK7LuQm5bUufr7e3egearWg4mSwVGBNsXaEVyRKdh8wvLRmXDrJRe",
  "key6": "5fGTe3jxevkACsXGvjLvRVFxAHzjNUq8whWL7wEHkgJXdWbadzTsRdWxH9AbGsbZ8hJUmvFxr6PfoSfx6Nj8Hhd3",
  "key7": "49HXTYGqWVjBJoN1bc193fdQewsNHPmvL9exg4KVzXga757fZJQrwE4oDFkLcfHB6rzvtQCnmnsW1Z67rP7yB5gH",
  "key8": "83WtZ7twr6ZmFthAYBkG91EBN4RWrC2RER292Hzgv5Ccrrx6R3HoZuhQ5CqG6nzk8jZGy7fhuW63sBaHkPo9wst",
  "key9": "3VBTRDsXRz7cHYj6SkBT6rNRBiLfnP1FHsdLJjpeKgcQ1Bbv7bfgaWWXmrX8snbZXengq2tGidKBRTmitAs78PGC",
  "key10": "2PgRKhhgS7FSC29gwSkZeKTvYfDVb2ruog7XjEcvs56YEd8o28f6vuUhvZwRmzpirCfSKufjyfR2PBHV5sFwCDRM",
  "key11": "2c13dffJhqNscggDK5MUvhgJpUkAXWsehGRRy8bVoNPgv6q5RHhzNykLwYdiade39DPLwjbaWsP2CBrpqkQGEmyM",
  "key12": "fwrhvu7ryutQwqAY33GyyMXuKHXtGCtrMxJaMBrZwVRzowr1at8VdtoTiqyrMuGgXn4QYhPDo3NBvjiXrKRxWyb",
  "key13": "2LLfDEXsNqZVbDzTEsmk7Eh5681J5cDWbcXMqRstEaNVW1vUNtHitPJnyaimSGQMRkEuM7LXmjrNphwVyB1awCn3",
  "key14": "3zhomvYq54rnsK5rtJ5QgowxRvg4phdCMPrvinLdyZ6yWwNDnsZKCWFZtmKks5aiTQeBA476pwchVyuWMMpg49bX",
  "key15": "53WEUanA5iYg1agDqesu6kbnWf2sYWEJkWiTrN5grPAZa67ByQxuN5F7bmsfmjcnwRLm99zV4fwKrNkCNLBicPtk",
  "key16": "2PSvzyKbuv7LVRknJE5yeC5AjzSCPXcfd9HfqCvjPLikhK7mgxa39mQL3dxhpEY4ceQW18Ce9PwbCy9exad1mb1x",
  "key17": "63RKFGxvL6abEBs8k8B93S8zRWRxvddXbDt3S1afKcPCmxsSpPVa2BZK4Eb91kDrwAkdSvPNRNKoJeQXxqDtogTf",
  "key18": "36nxuLvamJchFBcG5MfZEzVjTCz3BJynVxbesTnyWBgdfu8XwqazsuL5gEXkgpewT6HPyX14M8xdmXEJM3wX3MnZ",
  "key19": "4HgmEuZYrX8YF4V45eeSrHVPz1jHKW376p3PeaKyBaav3FExJqxEGPudp3NqKsCmFMemGjcdBDc9SnDmwG9dYMsq",
  "key20": "4xuPgFzfgXiBe3bMZNZtSYHV8HAmvqA5pCDH3937izJMF2zjGo3EyQgDJyefG4arTcCouRK55hau9PRmdMzrH6dR",
  "key21": "27zA1BFxJ1qTLpVMc2GTU7CdLqbqXZaKCuSuXqppXuLagsR44ur58EckCC1LZ8QThQ1Aq3AwqusiJnTrecnnFM5J",
  "key22": "2KcFBm64W22p2LAGEkKqR7L7UWqEMSod1iwhx8geDbd39CM7Gmk6cegCZNtHTJpJvtoGpBYmYRCkydXMHr5HsXhs",
  "key23": "3EgaAPuKve7RdcgTrHcn2r6e3SD4KYVEypBgwU4vqKz4nJQc7U4Ygzbiei3u1q8Wrwe4bZwgGdUtqv93JoKkds1Y",
  "key24": "5pXCxnsNYRwL7K2z1aUEVCfb68cCEKb2PLx4QC2LmmUcyrka67zuxabEvgobLzpsvbVX24sMySChHQb4RrZNGqLP",
  "key25": "2QcBF2jkMVeMFiAXH7XSKJAbtKzfJS36x5WW9ScTfMZ73ewBYJUdQGuFEJPN7kBgM8vPBEuyvKVyP86FziuX2Zer",
  "key26": "3diUfJpfGg1VUHJUadY7D8KvGfQU7ALzn8ioRiCywNsVCecf9H9L9LSrxykR7joZ8DLfMfC68tetgzX1H1rZkyNn",
  "key27": "DmhMmZuqX7eJewCJFycXiKLX1xpVpSF1Pp1Zc1Ny8xTy7hT9exTPJeX2MYkbr1AQX3VGsUQPzPSnqECgCh8JV4g",
  "key28": "3RDCYtQYqCiY5VEoLWMFBeK91ER5s4xrUyPLXLfsaiV1NL28qXNsCGXoAt3havUD9i3oLWcvsTFS9QkMXLoLnsUP",
  "key29": "5j2BXP79nbWCZhCDhvUQBB751yzJJ7nP6ngHNH8fbLq5eC3CZigrN4Q13RZSi3r7WBuFFWWMeQujaJMjYDoDiuRV",
  "key30": "An7VPXYaUhed1gT4PVrt1y6zWqnmzt29EyGYCYXKdsNEDWafHsd15kDRgKjfFbVkubnwagVcXmL1dioptjtDdcN",
  "key31": "56daLWWECzDBQ4NvgsRgeKdL2Ea37Up55ZCPZVSUstdfFgtwXSshVvjSsBtPxUD18CyVm6pCArn3C9Zcz5chzuyR"
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

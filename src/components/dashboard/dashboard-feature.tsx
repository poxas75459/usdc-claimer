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
    "5BGVh3PXHwFjmoSrfbPP2C76yu9qxwoHymBTSRW2ZyhZeoRYdGeoXwSFsqdEC61sbBPGPsVQ6DoceuKqZkgwjqSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBNANPkFzdFddT32R3KCP8b18cGyh1y7NaXAtnGsciNY3hFjMCFm41UWAVhHaB7rR1EXyoFkC8oox8tvAuUgE48",
  "key1": "66hHwHxho3pmEgu8GWn4mdVc921ePKkEg6t4zGsVmaoMvqs7GJELJgb9qmYxPdgYetyF6hsFwi4hHn53dDyZMhZs",
  "key2": "4fEg2GXAk8nZiyPkFJopihF2S52JbwvtfyjFxLMr9TMJvLQpTuWoHH4pMyij7ABXWm9LaMuLFjC5Jz4HrNshBKeR",
  "key3": "5nUjJHJEF6D2RFW2xoMUCZJT2GNsNH5ugrmEQaoydydshW1Y4TpAg4kX54UYLfR7RcS9aWKKooUANKHvpHvvewNn",
  "key4": "5GvVVAPutVLBxTVpCtsu2pFNoDewzkJyaMfHERDmKx564iQcjWUdoVEUUKrqHiTBznLPDMjboNH2YRpknMdGMWf5",
  "key5": "2QZ7aRWwBypfggJgQ84dmZNY1ypZgZsBKYJLsiGnmZPtca8KHzFTxuJnwKqTKdC974vinnFiRm1djsqN1GFqnemP",
  "key6": "54eY6EQvEWqWh7EumvK1aJqupj1aCthbnTaFGY3YxriaQAt5sj7VTUW2a77unCNJoBc6e7RY7gg1UEDzjQ3TXvXC",
  "key7": "BxB9g5idNEJwcAAqHtHhqV2vyzhZoRVcs8kVMywytZ7d4bQkcy7PZtDan5aiYTC1n193z43tP3WvDk14eSXb373",
  "key8": "2NyAQCr8DoAc4Aj7D1mqf82w7F5Rrhgg43YNaTXRNK6c37okLpeRirmFMtbrBmZg9sMbG1xq4K7Cu6vPZHS68JEY",
  "key9": "2XAVH3BHDjRbK27XS7BsNFSscuerdNfNGgScnTuGhMP3xADPKzQVwmWBA4UuEmFR9AnAVRGRmbP3tbx73DkEF4Sy",
  "key10": "AgGTYZRxGEwBKZKRYeCPZcLvN9n6AWhfQ3AbUZuDAuFjBaS3xTS1fEg6H8BdJL9EW783Ri9LNW3RUoziwRdm3xQ",
  "key11": "4819WUTQ5qkzpwtU2u1E4g1BoSGNjcNkNtXjLnwH1ZTwyYNoyC1ceMoBnpv7DDwGysGMdye6wa5AhFX7DYVVTufv",
  "key12": "46Pz4C9jqHPgsV4HtnR4t6n2FPZwho2MzeVdXr2xAgFNZz9fNA3ujJNUNZWdgmEb2anmMfkQUoa9bBEGCH9k2Mto",
  "key13": "biWUAa3S7dmYsx5TF6iWHAVqaKpzFCaLKrBeX2k1WVwKmLanDAN2iAQxCzhHBFyzgzmQTujxP4Pg5SrMBYmmuHJ",
  "key14": "4xoMDmQySkHbaURimPxcSUNVAchDJhnJHaMmUB3PnfHUTjoNfpf8zVkawNQgTNcBDbqmdGv526dNs4BnLqTHMevN",
  "key15": "4kX3XZmX1C5ygStkwVpDEQ3AaVHjtDTrtguyqDNbUyztDDKSUYs8gDQ4DyQWBTZ2h9KnSYPKFMXCK5QJmXn9vfws",
  "key16": "3kBAhm5BgSdCWeE5Adfs7Ybj44aSerzfJX8io3ugcMXSRgDVUj7bG6yBrPDpmYJt4CmYcQqks5bpWmWyFSoytQRe",
  "key17": "5NrqruhHmzLHRyinS2KyvRMkMBi8DUsaAhHWP4mZPRoT6naNkX3BWXdcnTBhCoUTMZMSb1XxujDCXuMbBzjNTwV",
  "key18": "4SYZ2egT7rVRi7PfRiax4CTp5VG1KbzfQbNMzv9UJenTiffZD6WExhcyRZ4dh1kLfTankfkYmGc8YbeJaLaGw4yY",
  "key19": "4sMQTEsPLLi5DnRMz8UYBjBtCz8u5A75Kmf2LRLG28WaFZnD9USU5PSp4X3RyfUWpWBpp7TAPuJMhzrVjTQc6pQs",
  "key20": "3hSrUSNyXNoaVZGM1YpYQv95cfBAfA981yT9E13FF74NgVTshXHfkHEXL6e2Sy8RroVLvh8q4uZpzL96UXipvrRp",
  "key21": "qPkmSwKndfbPm91AunnobsYrDYdJ1zZinJyCM2nWYpfLrQzCUxPtPRrUEsMPs3C4hveckGmsXeFeNfz3rFvzbh2",
  "key22": "4nrxP19HiqF2c38TjZ6CrVmnA8XFFePohKfZV3s3SmzWyR3NkThjbmLfVfs1YuLvjG35CUiwkk4y9WULa6vnHTHF",
  "key23": "4XU3DryPE78GePi9mT2SWntsUgNzPFgwgRG3BsyjKkCu9NmYkimWYZEhz4ZznDpjiiznKHSW39bVxih48gbMot3c",
  "key24": "3XogJyKFCqR9y6dDixzTfF7UenaFiq8fFkfzGCZ8xkitk8XYPox4YtzPMfBp8CoHV9n72dFg8QDQHLsZkiHLKWLr",
  "key25": "4E2ZWDdNFSos8FVsNcLJQifbywAB5FvCNfTVHuzu48MDGuCaXyNXM9deWdm2nYwZVx7eppU4TD4AwSNdYv9DfqGr",
  "key26": "5YAkv7KcVo4qYWgZnWRr3irroBaonY7Mmx1QugkLhhdHV86iNqLe851CjbkRRZbEv9Dzi4rJqoQJf9JAoTvgUMJo",
  "key27": "2CuYMbjrid9uTxBBbEWrhXyekjjts9yWgW67jN96g66CZJLwKr57HozFAS7uY72bFd7KaN1VqBbWHRdY9eLPcedT",
  "key28": "5AoJH3XPkKpCSsR3aa8bV9LvQ7D9faagUMwv6Qv69D5nFtuapJAJ67osVa6hCR2FZGkK4DVnBNNzYvcpaXHqqW7S",
  "key29": "43iXK25QgpZ1f48cX57GTUPTQR13v5AWV9peAtjeETDxSfhmnwYgsrLKKQ2Jwr7BCTfP3ciGFcEzfWeTK79Aqimh",
  "key30": "2NWMUm8CNWmgYK5kg96PQZXbTnTrSSjofo3WuTtFXFko8F9EQL3zJc3CaT1Si97is7GY49oM78B1B4mpGBTiuvGE",
  "key31": "5u11YGhSs7iycRwJreU2Pdti6jugGitMUUAhX3aUVgZvnyDuzxwDt3UdnshCHUqiStiDinZWTikUHCGemQPYbEk3",
  "key32": "5yh2dZTDP5KpTat4GZCDW7aD1udJqr4UxkgLbd9FXSaJJ33tuKCmZXpNUXeQHQig7eLcGk4TzYFzNPot5NFVQ5R5",
  "key33": "5nDwamQS5NGcMsnfgJ6zb6KCfh5ZVAxUfEwTDrDjQiEMcFhJbu3DtnhgAW8vBSmpoLnEDzEdoHmb6ydUkCd66zuF",
  "key34": "4fz8WrykcSon5pqSVft8DZuanV8tbXEiHbxLYfGKy76s1P4jeXXrHynm9fCcNsjR8UaS8qSuGUia9fZ42Pvj3sjT",
  "key35": "4T38QjphwTbfPDpVs3pXu6L4TZzrm7h1sqZvPCe9vYZaMkxFz1LpKq6Y2NNqooVFWWGXWA9qkR5iMzxQArSTaiuN",
  "key36": "2kdBT6mjFd2s6MqmWdaxjyptjDiuhLiQh3jTsfC3SQU716v8XnzDQUns7tsFVbpzHE7fj6b3V4VxBHWc5tgnqLGM",
  "key37": "4nBENhxht5pge8xjd7e4NV3C9T6QjxynGPAycSV2GYcHyifomRpb7MkdqMZCtdhJXC8LmE9v5mRWfZ8ZvEK9YYzq",
  "key38": "mJsk97d91TvVVBSDTrhJrUD7gAfi4McE5qG5zEiqb2jtMs3h5sekn1ebJwmTcNUFmDD59G4gNffPDiAv3BwVZcz",
  "key39": "5bCtqAPP94SA1JK7ascAgcGazSvg82D9YChH2t6vN6PXFLbEVv4Qmt5EEBNUdFrBJduqDc2ePUtUJUcQaN5uXRjx",
  "key40": "62KZ1PcyCSBuVooTRQpERHXCYsxhiY2oghd51UeveCXZkgFb5aFP65Q7N7j4JYtc13sS6csaUktvxdL8yMB3GQPo",
  "key41": "26DwGPMpm5PfyXRNEKKhc5gT897VdsZXduEv2fgvfbB8FLFFfXxsoEPqQyrNaH69y1s4JT5zh8CmHRiGyFAwjpf5",
  "key42": "4ZR7zFi277Ti1MepQ22FXJquK3Y9aDYXN93UaEKrP1L9zjJ1d8EbZ8hSowdZjykCZR7Wn17SrzuRm2fWVLBPfePM"
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

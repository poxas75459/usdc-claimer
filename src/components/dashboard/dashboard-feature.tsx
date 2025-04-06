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
    "3VDM26nMQgmAv114qwAU8PZyxYyYUokeJUbrGMvFVpZ6EvRR6b1wPqV3Z2iZs5J3fBRpLVkvam24hDEqSmrmfCjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cM8AWCXqWSgr16o6grBNfCzbsZtP8BkBqP52kMSzQoLvzvVbECmDrn1AdSCh4M2KHxvChH7rx88ZQVHXcBetHoR",
  "key1": "41CYXJVbM46roCUGvzVSfH53vVoaStULFZYKfWHh1SL4HnBBfiTGqMV5o4AaVDhBnrpJNT6oFvQVa5jA6vrGUe7W",
  "key2": "4zSqhedG4p7mkomh4d49yvtMAtCg8nktQEYYcRUnxpMPHGWNnUWcWikWnPor8sDSPEj3avZGPHRYb8wM26PcSszf",
  "key3": "XHPod2ZBXYSJBDFBE2ZZkaz3MPZWzyu2iUhfQK2xHuH4xcxz3tPs85dbksJojgBdfvm4eznSnzLEB4aQLEmABJ6",
  "key4": "2iTG5Ci8yFuhGjFn4X6ARSoPURtRajkAgLjmK6RDGXyfxWAe8z2EyLvSU9QRFU5ZZdcxXLox9gsCuLkonzvf8Unc",
  "key5": "2yQZ2wR1tXtL61io6zVvgu8itzLoaDo9nGqxfGBb6EDgcTgQYMTWrsJ2jfPTJiPhnvmABAdeqyqxBi5Qa8ZBmcBx",
  "key6": "4w3Se7CNcGLo1pEBhzhXAeFvtKQu5pL4tLnT9QNs5i2Zc9bwsWuxavHom5eqX4nHsPpPkgKEFUd7wqDaDwVe14Bk",
  "key7": "5WJwKKCDc2X1jGzePGdBYtNib2ofzSvdcHUR185X7cUuBYZzQBVpe1CJz7uckRo5SjygMkcGgUfrE9mLpEr313tL",
  "key8": "2HLReJnqi6Ni3kQdt1KEBjcnonPtnaciY4QCKg1WhNnav3szq7bABLiCx89evEC6RhcAme31iiNNYzxcDK2zpyGu",
  "key9": "5C1FjRrfygmJBn5Dbq1es5ij3BtNxs1zwPYRFTiiuykfr2kejBwbPxBjH4SYeBaLAn6HNuE8bpsQS5AeLMFVC6ct",
  "key10": "3Zjz6fm3ZjxDBsLK9yLiUA1Aafo3yTgAvrSs8LL3JeBFKoLFTmhJ1yRHSbnBs2P3p1T7M34Kmr9BipgfQ8j3dwmn",
  "key11": "JMmCQUCPp57cMfHeb6ceiT6dP7EUpg6cdtsDEUE4qPNhJftbbzkMgwHwUXd4noge3wP6NDUYhnGeH1kzsMmVQcm",
  "key12": "4eSb7U3RdPzMf6c2voiHssPA46aXGHcXL4AW4YBdz6enzqra4rWTkjG3SNNMwsG82Wnsdn7rcfwQAiqNGtMLM4S7",
  "key13": "5bRyvrkQ9oY35SENew19fUPUamEHBGqwnUvTHoUTS1wpQVaXAkAtygksvQTiBFapfpJXrAW37fZ7cyHRVxJBiXhA",
  "key14": "sghwUoPRPDDyCvhf1jxp1v2qBEWpZuBCERxdKF85UmZVz9DCmyh5rmaqkZ1cy3KedYVV4HfuFZrHVUi4hr85UAY",
  "key15": "2jJZFEkykhPMDMgvLAaJGmz9oaaVvj5Q6SKWWaVVphvQQ44fnCE33qgcFHoqmzG6UK4BvfXPsx6B6gBMUyuh9VZA",
  "key16": "4UPoBPD5UMEgta1tpkuSppMycpukngQSRp1BYWRpJzaqehSXFTpHMV55nwRoPpo26uPbUGi1vQkdeCPDA41Z2k2V",
  "key17": "56sXKMEBD7mUVBqei261RXcM1bJ1bQD2QPggtC3mBm5CcJS4e53PY3Ynfng8KNCtMnFAyMf2FRAkCbxAQxMb58Vm",
  "key18": "5KFZkWRTmvH9ri72DH1FkDvRMH4UidEh8hgDz7RZhhLRJCLE9VK7VB8Jvd2NytcGxqWaR4zUrhERdQPypgBTYdFP",
  "key19": "ifkXoMY2tuB4BcnKCYpAid9me9g6esQEpw7MZuE3UKdJjTb53WeMoq73wM4xtD7EbnUGMnTdZUpbdR61RFMeQkv",
  "key20": "2yXGr9cz1uQPRuveACXLaqvWfpZT6kFTdAwt7k6WPZaJQr1zswmL793sCCegsbgVAHNsuoc2oaamT3Ux4wkzFQow",
  "key21": "3SVcXamJZFzrYy5dvu74XKferdj4ESyo5692MuNbdxc2iiD4SmwsUoLnnAb2KfPmazTyr26Z1DhTWtLQfxWaeAWK",
  "key22": "3MwJ2WHYC7HWMniaX7GGBHFdhQRwjDM3cSvZPHP4y11BrpGwfrYKidjVUwhT6x16hK5F9WsmkwEh524M4LeS6kmj",
  "key23": "4dFquZjT9EFDhJkY1AnSu84LG9dXMuBMKPi96qUpnyaC8FBrz1viLbyPxQjE6fj2G43x8AmebrKT7S4Pc5A4yQYe",
  "key24": "2ZkJsUzGpzgNj5ye2Eh3nW9sirF7awTB8E9pP7BbPKxdiKesDZPcymPAGF8pnTyHq5ZXDGP4GW1oEMGthb6YyMXm",
  "key25": "5VFVHzYWswvrXkMQ3VEq7T8uEVt1veNtUszZHxstkBbn5bnKZf83b7qjHMGfpdPZ7fQSdYebj8hM4omhPaCcCJZY",
  "key26": "2WhvWmzMTdHLpc43o2zewywRXaonauGDipVo5hNXB83QSbMvCUR7APZYUTiEQTp8dp6sEfedk4iHbTNLc3TLMAoq",
  "key27": "4ym7rdf8jkGjCXb773ooxWNewXyLX7WugHGfUjVG6UtqDU7PqF23UXZxptpeKtFrP9PJtD7sNLumFNBJ4JD5dsDK",
  "key28": "5upCdYsbysdZ5cRV5emCoSeXrXnyddkZyzJERGEdcQG7das6DZmXZLc2KHjHXm6HtmYprEiE3rN8ZpiUxXeM2gDV",
  "key29": "3Vg7b4Q7866tWoPynLgPP6rq9z1BSygkwd99fdT4qXgSoJjy18Hxe6oRea9vpGRnuZhgE9kDLrnXBU6wjXbDukZr",
  "key30": "3uC2fPJSKDVaUzELaFbArRpX8u1fCNgjsVqxU5f3SoagnPhgoKD7UgUFRV5CGPUSH59XhPECdePqAJLis5McivXG",
  "key31": "48kMkccAUNdXrz6CkgWTU1EUHZ8uxusEL3YewaL8uVMKgbBxZ2eASghs7Fs86r51qBT2aNaJ6g7ef5EGrp2PNq26",
  "key32": "23mqZzxRZdwV9Ck6iHMvPfePzsVKBo1jMFKN33Dvk1VZptzjLiNhLqeRCuawzZCMYJzpnXrYyVqz3hDJfE618Y2K",
  "key33": "4FDpaLqWycEfPWtEe2FA4fRXXKtd4FwrhbtwVtCERp424MnRvHHKkcMGvFrzaPTfsnC8S5uXWMyrBK8tdBiuDEQj",
  "key34": "3PezeiBnadBxK26Lwmo2wKjy21jd7Gyy4qaoMLJW9Cti86NYfrqu7DcQnFSciN64JTYx989acHP99ejQwLJU7iun",
  "key35": "52ezXmXNTbuzs1uun6dC3P5XVQHedCoGJErCn7srAkqkm7DoPg14eKqDMohjvz3agPuGs8ncqvbk78nbpQUyjPsZ",
  "key36": "21jc94gbG4DAnwzJfVLLk8uw18sph4PrLVaBGM5F3ZqCRQj7RuVdTgZYbFL59upWCvPZRTXaKwma8zeSU4qNZDnu",
  "key37": "5ExtNuY1gJjQetfEu1SxctgAzf9mg84pDLApmBCLRNyZNm571XbkoUQMuY6fSUvrVSrRGvwPRBtveB7ohYYZW9QL",
  "key38": "CePoRLNBUjNDRZDPjZ2kuriGcd1eSXztNHU3zgE52LZGYAXjmveanN4rWGwWoiGqPuqjGUujdgKUDKGyPEnrBrk",
  "key39": "4s2cZbboScAVWRWxzHvqH5fJ1KWEtLyRzqHEyxfhhzsk2gKnUhCz2rxUAh7e6dC3Jow5SbivyKHDV7cyy9KX5mBg",
  "key40": "2UHSfdn1v8m3nbYoVQPHC8yJt148ay74cB1JR6oygA7MsfHeVxy8K4HKxxHoG9PmEsuw7LMtVmN18U6qFSZJcv7D",
  "key41": "38FSCHc9dEnv2Edkgq9AnsCkzQKEBVe6HVmPQzfZ3LT3YkD4bW5EgxL5Jy2pVwpkMxkzWXDGEh3eLGsd8tK5WDFJ",
  "key42": "55FqCSSdCQY3NRQu985pahu6sBJmZkhHbDJLGk2YKbhCAnn4r4zP2ACitBQUeUtUG3iYtiuwaaHyn4e8XPHQBV6z",
  "key43": "5DoYiqsMWco2Cv8BHDPHkFzPmSs9FhjBVhMZupzmn41D8kRhgbuRz5eDKbiqZnCYLXYAn9uN2iHmPtYdR8murGZR",
  "key44": "24eP2VDHBcgcuySKPep5rLkTTEdmMBJX3KTZ83cLGMhxgocHdmw2ZZ7bnwJSqh1YJtpPMMmDEGrhcxaRUvGM1497",
  "key45": "NZHk8UTwfL6PcQpHsrdoW5NeS8iheacCfbTFMgzUimUrWkhwao85TZ5i3vt2TX1Rwe7WgypNzxLygmvMRbKcKfK",
  "key46": "pW3BTr5WPyWzDzC45ETkKcFdbnxqD3cKhf4bMiDVDQmXPs2gfCG8x4tJWkwfwma9keFtta7hgfGiSn2sf4fsChb",
  "key47": "65ajXVMUdLyS4zGXCG2aJ6kev7ayFj3nsx5HPGvfMqhrGVKL8dWbPBE1yjHgUbfKMjeT5ev1C7pY6CxvFmiBg2K5",
  "key48": "3fUbkVmgtZGcKSpQgSgYK3btEgXnuL7zQg7bRPM9TrQ1Du7VXydovctjPhbDzKUV4o8KfWPrW8vhvu5hi4bpreCm",
  "key49": "3fiw5ub6inU7iCUDjhUxo5k4FCpYGekSDJJsQGcffLz895mNQgTu85ZPNHxsHaDmLWQMHj9emaE1rRpaGQf1CaRj"
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

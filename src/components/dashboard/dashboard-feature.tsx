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
    "4bSior6fjYSB7bPiyevbqJJwgt32VuM6sjDVGgaTNXhZJxY2SHaUsq4Shgny2B6jyWv17AXcN4rH8t39ouPRxe6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W6fd9GFDqi1zxnsH1S1PAT5DRgHsoSWk6wAyGRF9JBM9XnPEMjmesJhWpeM44MHnhjZrA8m1asorRZhUPm6dS3q",
  "key1": "2vKSJUdUcw5pgaTY7egUK6Ew8jgMJGTUJnpHRbnZ7CXYpzY9f8QwozE9vC5ShncSzWHr7GNjQmhAF74p6BMbAKLG",
  "key2": "5T4dM3N7ZZKB5DdiVadqBt8NkpmiULevzfZC8BLi2HvETfrDb4KQM5xFjZ3LrbCtz1Vw2SEzrZxFRohfCu8bhsQ",
  "key3": "7syeaQ9HCG4KJxL6135Hzm4Rn9SBQtX3uHvk3x5CPTk9WAwA7mKS6Q2GkJfvopWwaTfGy1RopgoZjZQdtWVntjC",
  "key4": "22R9C1xPCnsUrBLuqmKNaLb2Zgj6M5gSa98c4sAm2qx9oYok2A6wXPPgLgVBmAnigLgqFtt6aRkL4xstyQEcgNzq",
  "key5": "8eCXYeSuczriM5ZjVE9Rhr6uH1966nUatauDvxNQ27TwNKthxKzPz4z7ZCUaSJoYgTKNyBeFkuGc3QYGiahXhAh",
  "key6": "5M6xZiScfGJawYvnpShXHTXUT8inXJC6ed2WQk9morYxXfAtBGjGvqhmAGadTG3iXTA1Na79rjRRWkXARuiNZ5Pz",
  "key7": "4TYF12Cs5njywYyoZJzf9QVd9tMm7tFP5DNyKepQEaPFc9PsLYE3uqD5rDCikXn5VeKrXFZSVnP6AtjiG123ovpF",
  "key8": "4hGwxqTxTYkDmG5HovDn32Cka9f2kRCQfEjqFVha3mhGAEHNVXcBNJu9zhtig8UWyjT7idkRuFJnthDGvPt6ovvr",
  "key9": "5prDxonGq3rjitikMsfGmfftiKNUPsGpdfHbfVWAxTt5qtWsWBULM5aHv8tC9XvmPWbVbs7DAN22dhS6i9xqi8kF",
  "key10": "2PGJxwVZm4ReBeLiSnSKsnipK6Co38KymHJjTsX4jVyP3NTfnsFsvjGnfRJxgm5gTi3YRm1GSFjLekju3ya6KqEy",
  "key11": "3s67awSAJtVhtTQurbUXi4tdzPaYcEBPxANYpnHqPeAKtopAwhtSdcRojbQaK2n5tzd182sLxfunoawdUCVEotEC",
  "key12": "4ohrQoKxqd7dHd9nnn4FwYvZ2NK7tnrzZPaBC9WiLBgBZkiPRoLpsA2xr25vJLrLdULKBmJv9TmBAER9ERXKWcxv",
  "key13": "4Djr4VrXMh1yDRkj3AWniCeC66Q4e64qUe5YkGAfzPJQ8W5ZwE6TXYACrcUb7A29aPBrt3hYKw9shxdT8yzTsxgY",
  "key14": "4cAavcKGMxVEuHVf27qiByKhEttQxxm8K3H8Mf5kELRPnzvqLm2Fb5gq3wVvMVZKP59pB1JtDn6jWiYkFEPgPa5i",
  "key15": "2QuMh8F5jrvaziKmEvwjY4Vp9u42sKhcJyH1y9mzMayYu5Y3Dy8VtzRunjj2kmjCVftCappes6T1P5ctjhxD6x2T",
  "key16": "5rTfqFpZsnP71XRjeZEzzJaRjmrtQK7UTgPJHhVx5DEvPEtwjyaGmivPoqYU3SZz1N2dAyDeYwWaLR8ALmgu9Gcj",
  "key17": "5ttwydR3K9srDC9jCXGkcUZxfYqC1QN1gNb8kobgswp7pzx2swX2xQx4dyn5vJWuc5QjxESN6EUqnoAvDXsLhhrf",
  "key18": "3yxeVzbSyk4D6vQLEpk9Ns6R24HkKNLmdnp2pYK8jYt2Dgv215rTDi3y72AX1NzyRWrzQiDu6RaGJnqC5HPqKZ8M",
  "key19": "5Ur8bJroY7oevjRJ3x7XJicuzbR7wMNoU7maefnCAEYfvfZdTKj9XXdhLFTjHBrm8ettFhtrhnkU329T4bMqCPjJ",
  "key20": "3sXY55Mtcmpy4wMPtasxwpewv55M3NQovo4iiwp7UtGcjJ1U6RGydoKyuNKHcxkLakXkPY4Frc3ZiqKyAEVTi2a6",
  "key21": "93NyYQtVcoKghFNgnhGS5BhnCEQJWudCwmBLf4aJheydejzuaorxczrV9DmBrD8vZBpm4iAT8YWpdhWmESj6cLy",
  "key22": "45cQKSazqUzXBobn9266bGn2FweLs7Bv1SBodrYhQWL3vctZbFemQJGxptGuFHNAsM1fe4KH1eBQXeEHGHXTfruy",
  "key23": "2sv5oJiRfcJT72ttFhRR7n6gSA2rN8XqxVKBwHtbAC2WVwrwTPBFsnjQG9GAVLMzzJnw32e5syb8Cah5JTbyiA2T",
  "key24": "o4crBFPtBVJq9UAt6kMNMC2huaiesW6BVMqSYLHv4MT2YkZQ4szdcuG3jT5r5VcaJgzBuRw3LtUnq93JaeMGicQ",
  "key25": "2p4B27nmpQgMbyueBy3NFzUxXdvrEx3Sq3BnKuAJZVzfnNLrXuKuezLYHiEwRghGLckNexGrE9qxKpVNQ14K4t74",
  "key26": "58iL6TqpV81zEQCijxdQjCaPv5dP7UD1UtitNtGFSS8UYQw7sV5gzhtvF8cJRFvhYn6NhYFdXgQk3gCfJPVA43hM",
  "key27": "5drpcU4FRgSwWYquCPKN2kn2mpx9rLCHQyxqt97UjrK7KwgVP3yVTyERkcY7tCrYcsrb2Rssiuy2bhE5R8q42X9R",
  "key28": "5uxCPioCf3XroCF6UBsCZUMUj2iUCmmnv8BaS4hKtRBZ2Fsw4X1dJPXZ4GfTujkxC47xhU7tzFHiu2GLiUBeDZ1v",
  "key29": "2PQEWBLdWU5HR8wvfuJ9SFyWefVgddvzCzqRK1bdhwa4NAuAV7ieukAqA7xP1dFuRhwvfYQ5EgtpFgM3xRZ43RYf",
  "key30": "e77j7rG1hD6hs4KowNm6LyhbBMgXFiEG3QJAe8HU5pFQ6AuF83MdYF8hnwRbHv9Yg8CEiWhhhexbBVRX2wB1UnX",
  "key31": "2tgDsSU2jYYXwbwfa5Smh68PoEfTBo6LECCeDa1futWVmRkyxJmdAUF5rCvcKgJ5cmSXchR7DM1Vds6qQB5aSdmG",
  "key32": "5sbfjGUPoo1uNhYY83NtWdE1Vm9x8BfMNFQv5r62LHCAFCnupGZ6zDrdo2AeTiqZW1U63uLCbgJ61bUjsHjTjCvH",
  "key33": "5TUb2Gj7r3JQvu4aMwyrSQ6mX9NHZ8hLqR85Z31pX13p6Zn1rgCRjXH6pGyqeoo86DdJousqSsRW3E6vjAUUoKHm",
  "key34": "4QRdHcbS3AraEss4wMsXaBoB48yHFXqxppX68ybH6TRBGc5X63b7efzoJTG3ArEFaJ3PNcYT8orpSu8WhR8qUzeC",
  "key35": "3Rt8bmoSabufNhhNvkQzRp2MdCJK9kMXuvMHWurHE1nHs5fcpihHuotHNHL57eNpsmKJV8bkwUpAPJqMdwPYdKNa",
  "key36": "mXvGwv8mqj8c3vAeFZuHf7zw1ctuETFDv3S6KrzxdMtTVpZEvLNwXr3DWzh9uW99eKJZhtjL8Ki8DHCQ4pYdBZz",
  "key37": "3JtmzPZ8rCj4XjjY9gG1JHsWmCg6US9K2ij8HmG94yjVRphzqeNzYHCfdHZKvMaPggyEgY6eYJAmm1NGphvWqrnU",
  "key38": "4NWDs4H7QACHGSBVHYr5JqAN4pUkUBDcDQ6kfPMQ8oDRTq6VANraGPhodiDXvNxUubGz74TLcRfE1Qv3tEBh6Ri1",
  "key39": "4JG57wZScZw7Dgi1V6jgFUsX2kDP3LRKY4LFVK1JEhZ8A5KZnpQ3Tb6ktWsTt7rSDdsPdSMyjRx5V3gUsPoRAv4M",
  "key40": "3eMTp6tgxD4N553xLxQKX2GLYrKj3ATdgaPeM356ww2qaAomUyTVDcvWSHioCg1STnTxRzEsQbjrGHhLoNskCb8E",
  "key41": "31A1utczuRyeyBUFR4rmRtWRSZt2pdiVTx4v6bx2o2GcsxJegj69MtTsThJwvq7SNwo52pVwgA4jGb6i4EciHEH3",
  "key42": "2VcRjuZrZPkA5xRf3carGcPVaS9TUp7mK2iBzBea417QCcnwU5A9efFCh5wXEhcStmXZeEgbh1bEmzSw8P4QEX52",
  "key43": "2pzaUbPdgBbXqXR3FiRZdJPYU4QEFyVdSSKHaKux5adHwKczhGyfDHYRo9HhMtv5zRYAHFKmNFFgmSbTFdWBDbG2",
  "key44": "5jJsjhZE4DmoxmvPTiTGow2SLDHef5crLT4TkPWA9Mhik9e66mrQLMVf4LXbpzRs6AGWTu9xR5VfkuK3XqSP1MDD",
  "key45": "4FidPDQJJk6Tu1xNF8ScXhZcRWx86rdqeyEJWubL3pNR84CUpMtST2chkHpfAwGQRabQT4YtofEnuNPbyg2CfwYU",
  "key46": "3LLoTF4qqT9FmPJNhnVPpQVjuZfB5S1FrSqvyLEwDUAmwhb1SNNKdyzh73KdKuXbuzmCkmH5ye7PifGcZjR6diFk",
  "key47": "ddrA76gdHeTxxeMs8LXA7zAzHrXtRK3fWSA2P1pKaby374hgvK6Z24yC9TBJcvXVZpogC1YppWssgdP9W6v7R1G"
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

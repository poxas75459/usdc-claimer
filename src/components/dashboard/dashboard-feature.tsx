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
    "3g4DySiz5ueUKvUARTNHbsJaLT9XLnysgZuRYUbqCMGgun5YRaigSopXesEw6AhdD4Nm4YRf5YGKtcyiqmSwxbNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vFJmVsqQph5ezxMpFfzwbaq5en2HEW7WvSdbQz5TKKDTGjdBxJbwMREGYT6fJRpTeHBsuKynTa7iGUwUcYKLVTS",
  "key1": "5aBuj7fE9Vuw72cWwtwvrfuPNVsbkQo7ZFaN6hrbPX5UxatsjhPYRmbkRWag7j3HvjiEXctXv1KCHGRDFmZtvFjY",
  "key2": "5WDQaUk3qskCTDnzLgH2W8dnFDyQQvQBGRZR1z6krDMtcx3RPcpDt8eePAufsavyChnBoqxKnDW1BoX3S9fHthWT",
  "key3": "5c3EoMymUkgXAyBMeFetVVnZGaMgVHgoeJmNgvt7ptCtvJHXs2QggtPbAQa2bGCFPUfX5iHZhQqxXaGKpQYjq9on",
  "key4": "5V1WueriPn11bifRuTEbh9dMMDpF2cve92RhfpbatcvThVq8ygFqwMUaxTx8AX71XD7TE1N8p2GG4cwfFAy2Q3RL",
  "key5": "5vo9XQmgG9e3q1yYJAdiGVCMxexnXwwJEBnFA5Wf8byYAu1t26bh4c51u2FX94prp9hChigc3DbqAz5orR75UzL7",
  "key6": "2583xDzkt2Yitp6RkjUEmG3JxWoLrq8ad29kwnCgquxb6xqAzr7giCHJocHuVoicvg645iibED2Wewm977dGsPZp",
  "key7": "SNyJnf2g3e9iBW8gBtmV2wzdNUd7NwpF4JZs4D7SR9QidG6RSZuUEiy2owk5JRijsmhDCQaGDW2eUhq517BJLNf",
  "key8": "2MHWmWiFgRmu9yD2K7apbist4haqVn5zgCPM1Gj6L8f272A5GmRqMZrpGwirvULyXon8z87mZEsZAnuk3ZXt7iSh",
  "key9": "oE1HTjTNiJGAALL1kWr8t5hs8w3dLJzBoXof7NM9zpUbb9xqKWgUPvYQt9mNCEqAmFen6QumFmdB4GJhzQTQCdb",
  "key10": "5xHHU8cNawp29irA52VRCqAfZjdcmgVoV7GEzahqRyCUDrCUe4tyRFuu9K5Ub75BKGz8KR7zjHYSwDDzS6McEVty",
  "key11": "55zrCyoABiMtUtAFUzCPY9wACHu4G4PrK7HZGa8Vp7zLvpvGcN68ePLugmwD3F7Q5YooyfH4RV2aLtEySAY9J6mu",
  "key12": "3R2gsUkgAuoawpPZwtUMuHJbeLbuKmw5CLjwZVpWFiAuJyf2hyX6jkcLRpZEuVwkjun1148zzeTDVq8BnaTNg8jh",
  "key13": "3tbr73XWvLk58LswLffTZgB41gBLDjvH4SBZMqzCQy9qwCdX1xLa3o4oBSrqN2s7qxJ8R7wPf5SGX8b8zdqcUWrh",
  "key14": "ga9EtzNWJxGwJbATzy7NM6HyMuSn7PiQeD1HXZFVtRAngbyGw44e84U36YhqcbWP3n2s7DfhoVphFzsbd7vUiXc",
  "key15": "5wJtqA6xEFaM8QkRGTYNf8HeLnviT5rFGENFkWoFW4qWbSYade3dGokXRPzvJinJWGKzkfZbyzFrSShfVDGiej68",
  "key16": "52u2AtZNbhgFYZqZhWNWt7rTHurxEAD4TZbYQQiGTDHEb5MfG9bEdSGYoSyh1uBXPJZ6rgfNQAjyAkHFGCjwZTtN",
  "key17": "4F5RWxA2gAfGkXettaXzGqS2DWnFgvCgoWBwWcbaGX9cqr1Ghr4qU88LWrrGMpiMLokCBykqwNX46LJAFFcz5bPu",
  "key18": "3ZXNg5sjugWF41jkPH1odc7K8JCjYem8mpCicXmAAj1uPkZAyxbkJd4FwA43LdqHDLvLD7RMWsWHvPyqT2nNoZu3",
  "key19": "5zinjgnoGgwCi8YvkMn2LYTYnoTgocVjfixJwPs7QKNp7V2LhLZX8L4REGJcAhNop8Me7X56MzAbyuyEzL36uENi",
  "key20": "5ECTj5zhT2YGxos4M1FHT3USRoW97riFDPkATArKeDhCmAhKdt84YnJC6Fkp4Jv4Ma1xsRkRTFWbxywE5VbcF7Kp",
  "key21": "4nvp4ALYXMyhaNHyWUCAXTUfyhTTiVbvKvusmLgjgT3nzLLHCFvVDrtSV99KqZQr9kht2Ssq42HxaTZq96sWVVwY",
  "key22": "UCU3gyxmLSiQPBSp66KZaFKXBpEkmpzimUyGTjErj7XpDRQumUxm1exhCys7dGgcinBY1a9R1w86VBDHLCfdWsN",
  "key23": "5Xn4cFxNc6Y9ekb52z2euHUVt69nbo4MibXB5DXSnybBTpUmbPanYBzqiK6V4D3nsEvMTyHsDNiBiC2Hd8v9Uf7o",
  "key24": "4u2yv5e5gpKVAdoaAomjDEV9rPDKLeZV6b49NVRW247Bh7eSPGSbwfmjCSdRkna1daCE6ekUe1dURDV9v5trvUw1",
  "key25": "5P6xvmA8y6VQyosUkUJLHXwUuPo8BoAuXKkY3sqrmWckz19TnV8MMC3DUjGEAz3jWM3DzCuip9ksVrarC8PaS5UD",
  "key26": "3wpdVMX3tdRpocfNVv7xAUbqrRgBLHpFL1x42LrCi2vfYm28sGns34RXZfLzVSPXy5egsbkgkCvFh11SoiECyaqm",
  "key27": "3ETmptc17bBNx1dvKXRTBWNC24jJxrFk9RV5CFXMat6h3r7ZHkvUYJQu377Uh1cXY65BGw6o4PsjnN7dgCpfJhi1",
  "key28": "5Jy76Sjcu3RC1gSEA2CBeg4T8Aym9advtYfDriRgotkwrxbUZvJ75eFRv6rpBcYdkexxmDQ8T6BRSUVMzvkyezFS",
  "key29": "66xUvV6xKAWTmudEZmZygXnJbjCeP4NYRCsWCfpgbSPx4q7KkNDMeVafi5dAbRbx895zzx76AXo1okV5YtxVkjU8",
  "key30": "4aGHS2kbLYuGSRtvNFVhW5zfMePUXSEjWAFTncPW9a2RmZAeCzPrBrtqj72Fe32MsvxpYMPVMmWSSpsr4dkjkj5L",
  "key31": "4tZ14n6dyUYou7JK7tfdwweaaQU2aRGU26yAaEabFk2cUdTG4jKRPnqCT4Di6v1vbqYyPrVFkkrBvKT6HBwgEJzc",
  "key32": "zHEn7F6QAXBThXQijxpDDbSw476ydky4S8sVg2mzT28cTb8Qv8cRYMZgNsowYbBArFBjVKHLsWTrYxNbFmLYSF7"
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

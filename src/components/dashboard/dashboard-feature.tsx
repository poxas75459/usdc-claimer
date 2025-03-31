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
    "4RsKqb6Lp3Uttr2R1V5fHaZffkEatvCYG1EujpcZxsREvG7UaKhLozCoeVw6wEpHTDeX9vUd6eL42e1P7hWDn1tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qHQ3ecMCYt76cVbbRufdVNSRgYdrqhwQqoT11rFWAnZmf84YWJsjmEAixghCF8B7d7rML4TWNTMweDsCsvsYrzC",
  "key1": "3UF3G4zuzuW373AMZ53XFvzicewns8aieFn7K5pWNy29hNMkGTsK3QQEP2Tii4mpzy3JzAMaHzFWVRh1QAcMbW7W",
  "key2": "5TNYqSxA6gTYtqsY18VrGtwdYHEtmCghi4q7Em8MkBUmpg7vV983m8PBQhSXAkktwzi3s24eG3VeqUELzfXCHgZb",
  "key3": "5aky57soaCtanGgxEUfQC4vSTsZp4whmik92TxM126sQukx3Y7QwWkDHrgHK1LzmQjxZ3Bi5XzP6Zw2UMarqtfjg",
  "key4": "4LHau3rpYHYwFzdoMBVzfSqjBVXryz6dSfXipwAG1Cc5MaZqLNvtNW9tLhYKEer5Vs3QPMETKmHfWAbpVWPLiyAA",
  "key5": "3NZFsa8TKE5trMkhdGaQfi2HZu3qKVSiiCVjycT8MyXD2simNmTmPL7K9KmDyLotMJgEs9urRPFpf3SW7K8grK3P",
  "key6": "1hUpHJQxjVvb3RTzxfrREqwzsCuRVei84qwrnL2YyrMrsGo6iGiMMLHAG6PT4Xmjq9huDTKs2adCLuf81gEP7br",
  "key7": "4w3dji8qne7sVEqc7NXn9zpvceacvuQFqStvhg8djJekxnLNhuM9d8wcttRXd6Ys73BKPhtLebmPpur3Kp7rF2hC",
  "key8": "HXxb8C8jfZZ3mrp7Sg5XetpCTmURCVrVgvwYM4xE4rujHrK2ocXtMgjSAoDECSLUrgJ9haX2pCYb7Tnu5zUV4a7",
  "key9": "hEU4rUit1h4KuHbZgic2umDiVDYgJfuEK4XrVuu5CEXFLVFNUHM4ae9Csh8i611PnW6MScS2mhrSdhLEDGjanVH",
  "key10": "2z8sC4Uhnkq5iW2LwpCBpgrodUNa55aysBCqL3d957DxujSnDoCwHS4wxCm8FdXJwbK4st2ctSWxtTkBq8t5kVW6",
  "key11": "3NvnZBKsmm2KAUk2jAcPv9ms5bX21Nq1g5ymcLWGsugnQMYfyazZfsgr73s1ZoAV7uPuy61HAEwPgotW6PRYrYeG",
  "key12": "26Bft1LyHR4E5jo7F7izRCU1i2ixARnofLTcZEkwXcqtX5ng5WpowmMd7AonJgzBzAsaFhLifUaHLZ1hxEdwcQH3",
  "key13": "5abHS8dnxHxABtzQmNjxVvgu8fSCjxKqx8jeUnhxPT53JGe8hCoHx7QJ5RiZRVKk6HhEQzMHrWi9cSaqsGZ1Dhma",
  "key14": "4SKSRyMZ4Qpngmte94MZbEbVwkbSURUS2fv5GxBavbF8tUc7QoigVFBobCVCDXQR8qxCm8gmoHa8529JWKzACU54",
  "key15": "5bdqJCNZJrKn9LJedSBGK2RvuTGgrUduXNVZwPN9SeTnadTtoJdnYtrY32RvgPAZaVbhixmSmABDXUWWX4XL4S9x",
  "key16": "5c7uATAS4oMjuHg2SnDJ7YFTiTxzArguSSmDNkouiMhuLVm9ADTFfKRScN15rMFmtaUamLe5PBkHR65wg6td3BN9",
  "key17": "GCsz4AQC8C5PnU54aU4KNAtGuy8rSk3AVWGMdDiu1sTzeySDLTqKS7SpvoRBLct51qjrxfGgAJNm5HLm6AAcAJt",
  "key18": "4E8wNHinPSG22d8wo4Lw4o5FNn7cjotR4fjauw1rZAHW1Aou9VR1CqonXVmVE9fnyXgNb3Jd1EeNf5Zi46AP3zWA",
  "key19": "2F6mhKzMJ7fVeASg4isd4sDmiu212ZPvR7LaxTvauBQLZZpJEStHPK1ungdjCYfdh9aRjdjwQTWpgk3yxEp5QmMi",
  "key20": "2ecEqVuWCohAoja6wLZNoNix5BLZQyiZ6F2zRP96DYxWA91c6AsqWpnWwBYH5yVWnWy5LxdwxiEPQnhYKktFNoUH",
  "key21": "c1YYL6oHuG6ejizmyLygHZwzKcxkvCg78Nz1iXYnPKKk4eCNduKRmV2EbBZf8cCksbSQv1FSzZcdk41e4gyMWux",
  "key22": "3gxJFCM4e5pEkS7bpKF7VNBcy1PRt47ENsErvDqATb56rQvd7DW2pVhopjJi6xRehiingHW5QS8ZtrFkUsy3hdKk",
  "key23": "3rqe2BeyvCaqPEqjJnYdDwFenGgBmWekpd3AnuBJZUevR1qLtrMst1UDWbV1eUjVyk2wkSwJCUaFCrtKrJp1Rt3J",
  "key24": "53Qzw9SjgLaMHS6ZdXJTzvjY5h7QRr2MRK1miFb2xswHHU96t35U4Q9LZYd3dTvxcjzsTyHzhYy1SbrT2Parndis",
  "key25": "4YDdunmsTQgZTw6jozBtgbk4d3CXGKXfF6zZLbAYQ9PnhXqPofRVs7S3bvXuHxp2EeGjuq7JuKee4ESaHxv8ZyaT",
  "key26": "4jMaLBDuxHKn1mFgS7a1iGbPF73QrPNKMafCdtzDKzrGqvs6jgqaoiruxr7wydGKkA7ubxDBW66PCVT2aKB4iCA1",
  "key27": "WwoeE3rudBSDXimNDnyukzBaCU3TQxZH8KasEUwn85juUEhv8zWfoxqVTNswPhBhKhDC8RF3BMPCTMkqBtuFKoW",
  "key28": "HfdjBANKzrLognsYVSf9Qxb3oJZdGULknU9182ShNoXUfLuvRqPn974VJF75Ui3c6TJk6hMEBYZz4WybzZ7UPtz",
  "key29": "5w7VdT5beabapZMvgDc49hG4XwPcfJEJ7VJ8nUY4GA4yViW7M5fJjXRDTMYLG64bVN1maF8HA4jzF2CiGJvSdgNN",
  "key30": "2Kvq88vP7aWyxjSTv93QLjztGbgU3vYTfwmnKZMHSCPRTsA1PukJgRJoydK8ALXKz7C4TDdK5gH1bwjUvDiEUHyG",
  "key31": "5tue8gH3sEMuJB7BXtBTsiUGunLDkypVphmJVnXRp1PdHQfj94fAjBy5pgcx6KcYAo6EVMHHumeGimcKbR1e1uTS",
  "key32": "4AvNsJP87bHei8L999NjbbYoZkaJwykgzpsPhHWyBUDPSF6wtjSWuCL1zSYpmrhDTteCNuC1AnpiiFFCoqYwpQGr",
  "key33": "oA7orEdm193B8kSd1JxdPDmvUHeMWqfbpvVEbgNjvRvkYD3txggjbEB1PD28vCEpVqhTcCW3daQ8e8g7mo9PAeh",
  "key34": "wHitJq3PbqSFN8Xep5Uu5ur3YwaESy1m8fSdg5hBEPomjNfSEX5o2ts6mQR9tjWzJEkoqXaoqBGwFaqzRqQLF64",
  "key35": "3NC5uRz8cPRzUGKsbnv2UFWTyyFKPqRvZ8tZDqLoJYverDAHH53btq2SiSYDQvCZTv1tgVjNjUoMmGqoN6EboRwn",
  "key36": "3yVsNSXa9iJXVxhYJNkfUfzoakDXHqtY2PYtuq395P58qyYZi7zpiQdD5CpDHTEVpN3Mj4zMviJXGGKoPRYTUsFg",
  "key37": "2md6nmvy9cSffdXiXCDVnMtrqwW4R654CaJszgcQKZNXMchXVap3m2s9KXBd5KLRjAS87Ast9LAnTRutPiX9GuRS",
  "key38": "k5vazdoWBvjhZ56KknTc1cLg8HcRwn9ZR53LvCBk9UxfPxGgdMVcha59VnaxSAGnWoSWG4DTbgxecJ1JjeXPRE6",
  "key39": "PvBA1P7ajbeojor57inBqye1QtXJKUg1zSNxEfmdTdCbyVQ4U13A7ed3LPNGZMAr9KSUNVDpFuoYfwi2amx6Ugn",
  "key40": "5B91gECrNN9eS2YHRC8qzSL3qzyDWZit1UMax4YMeZicX47ceGN3YQNWhNWr7k2TMu2hdwoPvi169X9vFfpnGvwK",
  "key41": "3K7XZzKfBFnbFZxmi1MdzLqEs6PNFDpDcdJKM7f1AvxxdcTQssxh41DBUECojokRrWSBfYtxVUiLv4pBXwLyB9vV",
  "key42": "4TVJgxfD1NyGtTSZDiTPgQ7pyob6nRggYyxNYWscqLqSdSRHqj1zL3KiqafpsTcnAFBS2Pd6NZYzd5y3n3NPRgjW",
  "key43": "3yy6ypmPEmLQndnSVCWdXevPVaL7MokxmzSfSd38hQ5oxzyHAJ1BsYVYY1pLBwU4GbWnz2VRWjsQ9RYx2RddtdJr",
  "key44": "2xSpERUbfKHVCFx1AbMiRp4R7tPU57YLfKraZqFWuoqxquYTNnHEPzouSuZXmJXDJYXjsgwTnSySh2nTtAtbsePM",
  "key45": "3sHxonXfKQ6aRx21AtNkE7D1vnpSp1KqmS4w4s1sKc2M1EHr7ik7HSfV5kaQFzuqnDxc8EtS5sCwWHd1USaKjvy4",
  "key46": "2oPdyXsEzDNak7DKR5SPr7xAa668s6RBN68tBCsd8iKDsZe9GDUpGB6bhSQCBsaR5DDsrfAsysa8LheoZGxuidp6"
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
